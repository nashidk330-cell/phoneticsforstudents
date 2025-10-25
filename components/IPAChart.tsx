import React from 'react';
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';

interface SymbolData {
    symbol: string;
    example: string;
    speakAs?: string;
    variant?: 'uk' | 'us';
}

const SpeakerIcon: React.FC<{isSpeaking: boolean}> = ({ isSpeaking }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform duration-200 ${isSpeaking ? 'text-blue-500 scale-110' : 'text-slate-500 group-hover:text-blue-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
    </svg>
);

const SymbolButton: React.FC<SymbolData> = ({ symbol, example, speakAs, variant }) => {
    const { isSpeaking, speak } = useSpeechSynthesis();
    const textToSay = speakAs || example.split(',')[0];

    return (
        <div className="text-center p-2 border rounded-lg hover:bg-blue-50 hover:shadow-sm transition-all duration-200 h-full flex flex-col justify-between items-center">
            <div className="flex-grow flex flex-col justify-center">
                <div className="text-3xl font-bold text-blue-700 font-english">{symbol}</div>
                <div className="text-sm text-slate-600 font-english mt-1">{example}</div>
            </div>
             <div className="flex items-center justify-center gap-2 mt-2">
                 <button onClick={() => speak(textToSay, variant)} disabled={isSpeaking} className="p-2 rounded-full bg-slate-200/50 hover:bg-blue-100 group transition-colors duration-200 disabled:opacity-50">
                    <SpeakerIcon isSpeaking={isSpeaking} />
                </button>
            </div>
        </div>
    );
};

const ChartSection: React.FC<{ title: string; symbols: SymbolData[], gridCols?: string }> = ({ title, symbols, gridCols = 'grid-cols-4 md:grid-cols-7' }) => (
    <div>
        <h4 className="text-lg font-semibold text-green-900 mb-3 font-bengali">{title}</h4>
        <div className={`grid ${gridCols} gap-2`}>
            {symbols.map(s => <SymbolButton key={s.symbol} {...s} />)}
        </div>
    </div>
);

const vowelData: {
    short: SymbolData[];
    long: SymbolData[];
    diphthongs: SymbolData[];
} = {
    short: [
        { symbol: '/ɪ/', example: 'bit' }, { symbol: '/e/', example: 'bed' },
        { symbol: '/æ/', example: 'cat' }, { symbol: '/ɒ/', example: 'hot', variant: 'uk' },
        { symbol: '/ʌ/', example: 'cup' }, { symbol: '/ʊ/', example: 'book' },
        { symbol: '/ə/', example: 'about' },
    ],
    long: [
        { symbol: '/iː/', example: 'see' }, { symbol: '/ɑː/', example: 'father' },
        { symbol: '/ɔː/', example: 'door' }, { symbol: '/uː/', example: 'food' },
        { symbol: '/ɜː/', example: 'bird' },
    ],
    diphthongs: [
        { symbol: '/eɪ/', example: 'day' }, { symbol: '/aɪ/', example: 'buy' },
        { symbol: '/ɔɪ/', example: 'boy' }, { symbol: '/aʊ/', example: 'now' },
        { symbol: '/əʊ/', example: 'go', variant: 'uk' }, { symbol: '/ɪə/', example: 'here', variant: 'uk' },
        { symbol: '/eə/', example: 'there', variant: 'uk' }, { symbol: '/ʊə/', example: 'poor', variant: 'uk' },
    ]
};

const consonantData: {
    plosives: SymbolData[];
    fricatives: SymbolData[];
    affricates: SymbolData[];
    nasals: SymbolData[];
    approximants: SymbolData[];
} = {
    plosives: [
        { symbol: '/p/', example: 'pen' }, { symbol: '/b/', example: 'ball' },
        { symbol: '/t/', example: 'top' }, { symbol: '/d/', example: 'dog' },
        { symbol: '/k/', example: 'cat' }, { symbol: '/g/', example: 'go' },
    ],
    fricatives: [
        { symbol: '/f/', example: 'fish' }, { symbol: '/v/', example: 'van' },
        { symbol: '/θ/', example: 'think' }, { symbol: '/ð/', example: 'this' },
        { symbol: '/s/', example: 'sun' }, { symbol: '/z/', example: 'zoo' },
        { symbol: '/ʃ/', example: 'ship' }, { symbol: '/ʒ/', example: 'pleasure' },
        { symbol: '/h/', example: 'house' },
    ],
    affricates: [
        { symbol: '/tʃ/', example: 'chair' }, { symbol: '/dʒ/', example: 'jump' },
    ],
    nasals: [
        { symbol: '/m/', example: 'man' }, { symbol: '/n/', example: 'no' },
        { symbol: '/ŋ/', example: 'sing' },
    ],
    approximants: [
        { symbol: '/l/', example: 'love' }, { symbol: '/r/', example: 'red' },
        { symbol: '/w/', example: 'water' }, { symbol: '/j/', example: 'yes' },
    ],
};

export const IPAChart: React.FC = () => {
    return (
        <div className="space-y-10">
            <div>
                <h3 className="text-2xl font-bold text-slate-700 mb-4 font-bengali border-b pb-2">Vowels (স্বরধ্বনি)</h3>
                <div className="space-y-6">
                    <ChartSection title="Short Vowels (হ্রস্ব স্বর)" symbols={vowelData.short} />
                    <ChartSection title="Long Vowels (দীর্ঘ স্বর)" symbols={vowelData.long} gridCols="grid-cols-3 md:grid-cols-5" />
                    <ChartSection title="Diphthongs (মিশ্র স্বর)" symbols={vowelData.diphthongs} />
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-bold text-slate-700 mb-4 font-bengali border-b pb-2">Consonants (ব্যঞ্জনধ্বনি)</h3>
                 <div className="space-y-6">
                    <ChartSection title="Plosives/Stops (স্ফোটক)" symbols={consonantData.plosives} gridCols="grid-cols-3 md:grid-cols-6" />
                    <ChartSection title="Fricatives (ঘর্ষণজনিত)" symbols={consonantData.fricatives} gridCols="grid-cols-3 md:grid-cols-5" />
                    <ChartSection title="Affricates (ঘৃষ্ট)" symbols={consonantData.affricates} gridCols="grid-cols-2" />
                    <ChartSection title="Nasals (নাসিক্য)" symbols={consonantData.nasals} gridCols="grid-cols-3" />
                    <ChartSection title="Approximants (নৈকট্য)" symbols={consonantData.approximants} gridCols="grid-cols-2 md:grid-cols-4" />
                </div>
            </div>
        </div>
    );
};
