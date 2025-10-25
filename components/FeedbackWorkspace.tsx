import React from 'react';
import { PronunciationPractice } from './PronunciationPractice';

interface FeedbackWorkspaceProps {
    words: string[];
    sentences: string[];
}

const PracticeItem: React.FC<{ text: string }> = ({ text }) => {
    return (
        <li className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200 hover:bg-white hover:shadow-sm transition-all duration-200">
            <span className="text-md font-english text-slate-700 flex-1 pr-4">{text}</span>
            <PronunciationPractice targetWord={text} showScore={true} />
        </li>
    );
};

export const FeedbackWorkspace: React.FC<FeedbackWorkspaceProps> = ({ words, sentences }) => {
    return (
        <div className="space-y-12">
            <div>
                <h3 className="text-2xl font-bold text-green-800 font-bengali mb-4">Daily Words (দৈনিক শব্দ)</h3>
                <ul className="space-y-3">
                    {words.map(word => <PracticeItem key={word} text={word} />)}
                </ul>
            </div>
            <div>
                <h3 className="text-2xl font-bold text-green-800 font-bengali mb-4">Daily Sentences (দৈনিক বাক্য)</h3>
                <ul className="space-y-3">
                    {sentences.map(sentence => <PracticeItem key={sentence} text={sentence} />)}
                </ul>
            </div>
        </div>
    );
};
