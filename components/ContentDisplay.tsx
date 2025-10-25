import React from 'react';
import type { Chapter } from '../types';
import { PhoneticCard } from './PhoneticCard';

interface ContentDisplayProps {
  chapter: Chapter;
}

export const ContentDisplay: React.FC<ContentDisplayProps> = ({ chapter }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <div className="border-b-2 border-blue-200 pb-4 mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 font-english">{chapter.title}</h1>
        <h2 className="text-xl font-semibold text-green-800 font-bengali mt-1">{chapter.bengaliTitle}</h2>
        <p className="mt-3 text-green-800 font-bengali">{chapter.description}</p>
      </div>
      
      {chapter.sections && chapter.sections.length > 0 && (
        <div className="text-green-800 font-bengali space-y-8">
          {chapter.sections.map((section, index) => (
            <div key={index} className="content-section">
              <h3 className="font-bold text-xl text-green-900 mb-2">{section.title}</h3>
              <div className="space-y-2 leading-relaxed">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      )}

      {chapter.symbols && chapter.symbols.length > 0 && (
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 ${chapter.sections && chapter.sections.length > 0 ? 'mt-8 pt-8 border-t' : ''}`}>
          {chapter.symbols.map((symbol, index) => (
            <PhoneticCard key={index} symbol={symbol} />
          ))}
        </div>
      )}
    </div>
  );
};
