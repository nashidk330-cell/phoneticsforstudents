import type { ReactNode } from 'react';

export interface PhoneticSymbol {
  symbol: string;
  exampleWord: string;
  ipaTranscription: string;
  bengaliMeaning: string;
  bengaliExplanation: string;
  speakAs?: string; // Add this line
}

export interface ContentSection {
  title: string;
  content: ReactNode;
}

export interface Chapter {
  id: string;
  title: string;
  bengaliTitle: string;
  description: string;
  symbols?: PhoneticSymbol[];
  sections?: ContentSection[];
}