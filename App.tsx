
import React, { useState, useCallback } from 'react';
import { Sidebar } from './components/Sidebar';
import { ContentDisplay } from './components/ContentDisplay';
import { Introduction } from './components/Introduction';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PHONETICS_DATA } from './constants';
import type { Chapter } from './types';

const App: React.FC = () => {
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);

  const handleSelectChapter = useCallback((chapter: Chapter) => {
    setSelectedChapter(chapter);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleGoHome = useCallback(() => {
    setSelectedChapter(null);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
      <Header onGoHome={handleGoHome} />
      <div className="flex flex-1 flex-col md:flex-row container mx-auto p-4 md:p-6 gap-6">
        <aside className="w-full md:w-64 lg:w-72 flex-shrink-0">
          <Sidebar
            chapters={PHONETICS_DATA}
            onSelectChapter={handleSelectChapter}
            selectedChapterId={selectedChapter?.id ?? ''}
          />
        </aside>
        <main className="flex-1 min-w-0">
          {selectedChapter ? (
            <ContentDisplay chapter={selectedChapter} />
          ) : (
            <Introduction />
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
