import React from 'react';
import type { PhoneticSymbol } from '../types';
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';

interface PhoneticCardProps {
  symbol: PhoneticSymbol;
}

const SpeakerIcon: React.FC<{isSpeaking: boolean}> = ({ isSpeaking }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transition-transform duration-200 ${isSpeaking ? 'text-blue-500 scale-110' : 'text-slate-500 group-hover:text-blue-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
    </svg>
);

export const PhoneticCard: React.FC<PhoneticCardProps> = ({ symbol }) => {
    const { isSpeaking, speak } = useSpeechSynthesis();
    
    const textToInteract = symbol.speakAs || symbol.exampleWord.split(',')[0].trim();

    return (
        <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 flex flex-col justify-between gap-3 transform hover:scale-105 hover:shadow-xl transition-all duration-300">
            <div>
                <div className="flex justify-between items-start mb-2">
                    <p className="text-4xl font-bold text-blue-600 tracking-wider">{symbol.symbol}</p>
                    <div className="flex items-center gap-2">
                        <button onClick={() => speak(textToInteract)} disabled={isSpeaking} className="p-2 rounded-full bg-slate-200/50 hover:bg-blue-100 group transition-colors duration-200 disabled:opacity-50">
                            <SpeakerIcon isSpeaking={isSpeaking} />
                        </button>
                    </div>
                </div>
                <div className="flex items-baseline gap-2">
                    <p className="text-2xl font-semibold font-english text-red-600">{symbol.exampleWord}</p>
                    <p className="text-lg text-slate-500 font-english">{symbol.ipaTranscription}</p>
                </div>
                <p className="text-md font-bengali text-green-800 mt-1 mb-3">{symbol.bengaliMeaning}</p>
                <p className="text-sm font-bengali text-green-800 leading-relaxed">{symbol.bengaliExplanation}</p>
            </div>
        </div>
    );
};
