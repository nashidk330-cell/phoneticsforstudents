import React, { useState, useCallback, ReactNode, useEffect, useRef } from 'react';

interface SpeakProps {
  children?: ReactNode;
  variant?: 'uk' | 'us';
  speakAs?: string;
}

const UKFlag: React.FC = () => (
    <svg className="speak-flag" viewBox="0 0 60 30" width="15" height="10"><clipPath id="t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"></path></clipPath><path d="M0,0 v30 h60 v-30 z" fill="#00247d"></path><path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"></path><path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#cf142b" strokeWidth="4"></path><path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"></path><path d="M30,0 v30 M0,15 h60" stroke="#cf142b" strokeWidth="6"></path></svg>
);

const USFlag: React.FC = () => (
    <svg className="speak-flag" viewBox="0 0 7410 3900" width="15" height="10"><path fill="#b22234" d="M0 0h7410v3900H0z"></path><path stroke="#fff" strokeWidth="300" d="M0 450h7410M0 1050h7410M0 1650h7410M0 2250h7410M0 2850h7410M0 3450h7410"></path><path fill="#3c3b6e" d="M0 0h2964v2100H0z"></path></svg>
);

const InlineSpeakerIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="speak-icon" viewBox="0 0 20 20" fill="currentColor">
        <path d="M7 4a1 1 0 000 2h6a1 1 0 100-2H7zM6 8a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zM4 12a1 1 0 011-1h8a1 1 0 110 2H5a1 1 0 01-1-1zM3 15a1 1 0 100 2h14a1 1 0 100-2H3z" clipRule="evenodd" fillRule="evenodd" />
    </svg>
);

export const Speak: React.FC<SpeakProps> = ({ children, variant, speakAs }) => {
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

    const handleSpeak = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        const textToSpeak = speakAs || (children ? String(children) : '');

        if (typeof window === 'undefined' || !window.speechSynthesis) {
            alert('Sorry, your browser does not support text-to-speech.');
            return;
        }
        
        if (isSpeaking) {
             window.speechSynthesis.cancel();
             setIsSpeaking(false);
             return;
        };
        
        if (!textToSpeak.trim()) {
            return;
        }

        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        
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
        utterance.onerror = () => setIsSpeaking(false);

        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);
    }, [children, isSpeaking, variant, speakAs]);

    return (
        <span className={`speak-wrapper font-english ${isSpeaking ? 'speaking' : ''}`} onClick={handleSpeak}>
            {children}
            {variant === 'uk' && <UKFlag />}
            {variant === 'us' && <USFlag />}
            <InlineSpeakerIcon />
        </span>
    );
};
