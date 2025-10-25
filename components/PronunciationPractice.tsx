import React, { useState, useEffect, useCallback } from 'react';

interface SpeechRecognition extends EventTarget {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  start(): void;
  stop(): void;
  onstart: () => void;
  onend: () => void;
  onerror: (event: SpeechRecognitionError) => void;
  onresult: (event: SpeechRecognitionEvent) => void;
}

interface SpeechRecognitionEvent extends Event {
  results: {
    [key: number]: {
      [key: number]: {
        transcript: string;
        confidence: number;
      };
      isFinal: boolean;
    };
  };
}

interface SpeechRecognitionError extends Event {
    error: 'no-speech' | 'audio-capture' | 'not-allowed' | 'network' | 'aborted' | 'language-not-supported' | 'service-not-allowed' | 'bad-grammar';
}

declare global {
  interface Window {
    SpeechRecognition: new () => SpeechRecognition;
    webkitSpeechRecognition: new () => SpeechRecognition;
  }
}

const levenshteinDistance = (a: string = '', b: string = ''): number => {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;
    const matrix = Array(b.length + 1).fill(null).map(() => Array(a.length + 1).fill(null));
    for (let i = 0; i <= a.length; i++) { matrix[0][i] = i; }
    for (let j = 0; j <= b.length; j++) { matrix[j][0] = j; }
    for (let j = 1; j <= b.length; j++) {
        for (let i = 1; i <= a.length; i++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            matrix[j][i] = Math.min(
                matrix[j][i - 1] + 1,
                matrix[j - 1][i] + 1,
                matrix[j - 1][i - 1] + cost,
            );
        }
    }
    return matrix[b.length][a.length];
};

interface PronunciationPracticeProps {
  targetWord: string;
  variant?: 'uk' | 'us';
  showScore?: boolean;
}

const MicrophoneIcon: React.FC<{ isListening: boolean }> = ({ isListening }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transition-transform duration-200 ${isListening ? 'text-red-500 scale-110 animate-pulse' : 'text-slate-500 group-hover:text-blue-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
  </svg>
);

export const PronunciationPractice: React.FC<PronunciationPracticeProps> = ({ targetWord, variant, showScore = false }) => {
  const [isListening, setIsListening] = useState(false);
  const [feedback, setFeedback] = useState<{ text: string; type: 'success' | 'error' | 'info' } | null>(null);
  const recognitionRef = React.useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);
  
  useEffect(() => {
    if (feedback) {
      const timer = setTimeout(() => setFeedback(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [feedback]);

  const handlePractice = useCallback(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setFeedback({ text: 'Speech recognition is not supported in this browser.', type: 'error' });
      return;
    }

    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      return;
    }
    
    setFeedback(null);
    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;

    recognition.lang = variant === 'uk' ? 'en-GB' : 'en-US';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onend = () => {
      setIsListening(false);
      recognitionRef.current = null;
    };

    recognition.onerror = (event: SpeechRecognitionError) => {
      let errorText = 'An error occurred during recognition.';
      if (event.error === 'no-speech') {
        errorText = "I didn't hear anything. Please try again.";
      } else if (event.error === 'not-allowed') {
        errorText = 'Microphone access was denied.';
      }
      setFeedback({ text: errorText, type: 'error' });
    };

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const result = event.results[0][0];
      const transcript = result.transcript;
      const confidence = result.confidence || 0.5;
      const cleanTranscript = transcript.trim().toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g,"");
      const cleanTarget = targetWord.trim().toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g,"");

      if (showScore) {
        const distance = levenshteinDistance(cleanTranscript, cleanTarget);
        const maxLength = Math.max(cleanTranscript.length, cleanTarget.length);
        const similarity = maxLength > 0 ? (maxLength - distance) / maxLength : 1;
        
        const finalScore = Math.round((similarity * 0.7 + confidence * 0.3) * 10);
        
        setFeedback({ 
          text: `Score: ${finalScore}/10. I heard: "${transcript}"`, 
          type: finalScore > 6 ? 'success' : finalScore > 3 ? 'info' : 'error' 
        });

      } else {
         if (cleanTranscript === cleanTarget) {
            setFeedback({ text: `Perfect! You said: "${transcript}"`, type: 'success' });
          } else {
            setFeedback({ text: `Good try! I heard: "${transcript}"`, type: 'info' });
          }
      }
    };
    
    recognition.start();

  }, [isListening, targetWord, variant, showScore]);

  const feedbackColorClasses = {
    success: 'text-green-700 bg-green-100 border-green-200',
    error: 'text-red-700 bg-red-100 border-red-200',
    info: 'text-blue-700 bg-blue-100 border-blue-200',
  };

  return (
    <div className="relative">
      <button 
        onClick={handlePractice} 
        disabled={isListening}
        className="p-2 rounded-full bg-slate-200/50 hover:bg-blue-100 group transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label={`Practice pronouncing ${targetWord}`}
      >
        <MicrophoneIcon isListening={isListening} />
      </button>
      {feedback && (
         <div className={`absolute bottom-full right-0 mb-2 p-2 rounded-lg text-xs font-english shadow-lg w-max max-w-xs text-center z-10 border ${feedbackColorClasses[feedback.type]}`}>
            {feedback.text}
         </div>
      )}
    </div>
  );
};
