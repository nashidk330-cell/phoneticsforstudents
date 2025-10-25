import { useState, useCallback, useRef, useEffect } from 'react';

export const useSpeechSynthesis = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const voicesRef = useRef<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    const loadVoices = () => {
      voicesRef.current = window.speechSynthesis.getVoices();
    };
    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();
    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    }
  }, []);

  const speak = useCallback((text: string, variant?: 'uk' | 'us') => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
        console.error('Speech synthesis not supported.');
        alert('Sorry, your browser does not support text-to-speech.');
        return;
    }
    
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    const lang = variant === 'uk' ? 'en-GB' : 'en-US';
    const selectedVoice = voicesRef.current.find(voice => voice.lang === lang) || voicesRef.current.find(voice => voice.lang.startsWith('en-'));
    
    if (selectedVoice) {
        utterance.voice = selectedVoice;
    } else {
         utterance.lang = lang;
    }

    utterance.rate = 0.9;
    utterance.pitch = 1.0;
    
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => {
        setIsSpeaking(false);
        console.error("Speech synthesis error occurred.");
    };

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }, [isSpeaking]);
  
  return { isSpeaking, speak };
};
