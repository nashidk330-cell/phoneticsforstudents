import React from 'react';
import type { Chapter } from '../types';

interface SidebarProps {
  chapters: Chapter[];
  onSelectChapter: (chapter: Chapter) => void;
  selectedChapterId: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ chapters, onSelectChapter, selectedChapterId }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 sticky top-24">
      <h2 className="text-lg font-bold font-bengali text-slate-700 mb-4 border-b pb-2">বিষয়সূচি</h2>
      <nav>
        <ul>
          {chapters.map((chapter) => (
            <li key={chapter.id}>
              <button
                onClick={() => onSelectChapter(chapter)}
                className={`w-full text-left p-3 rounded-lg transition-all duration-200 text-sm md:text-base ${
                  selectedChapterId === chapter.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-slate-600 hover:bg-blue-50 hover:text-blue-700'
                }`}
              >
                <span className="font-semibold font-english">{chapter.title}</span>
                <br />
                <span className="text-xs font-bengali">{chapter.bengaliTitle}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
