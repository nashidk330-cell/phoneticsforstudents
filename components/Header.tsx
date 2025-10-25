import React from 'react';

interface HeaderProps {
    onGoHome: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onGoHome }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-20">
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer"
          onClick={onGoHome}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 2a6 6 0 00-6 6v3.586l-1.707-1.707A1 1 0 00.879 11.293L5.384 15.8a1 1 0 001.414 0L11.3 11.293a1 1 0 00-1.414-1.414L8 11.586V8a4 4 0 118 0v1a1 1 0 002 0V8a6 6 0 00-6-6z" />
            <path d="M5 18a1 1 0 01-1-1v-1a1 1 0 112 0v1a1 1 0 01-1 1zM15 18a1 1 0 01-1-1v-1a1 1 0 112 0v1a1 1 0 01-1 1z" />
          </svg>
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-slate-800 font-english">Phonetics Notebook</h1>
            <p className="text-xs text-green-800 font-bengali">সঠিক ইংরেজি উচ্চারণের পাঠশালা</p>
          </div>
        </div>
      </div>
    </header>
  );
};
