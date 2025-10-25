import React from 'react';
import type { Chapter } from './types';
import { Speak } from './components/Speak';
import { IPAChart } from './components/IPAChart';
import { FeedbackWorkspace } from './components/FeedbackWorkspace';

// A helper component to render code tags without using JSX in this .ts file
const Code: React.FC<{ children: React.ReactNode }> = ({ children }) => React.createElement("code", { className: "font-english" }, children);

const dailyWords = [
  'Hello', 'Thank you', 'Please', 'Sorry', 'Excuse me',
  'Goodbye', 'Water', 'Food', 'Help', 'Today',
  'Tomorrow', 'Yes', 'No', 'Maybe', 'Always',
  'Never', 'Friend', 'Family', 'Happy', 'Love',
  'Beautiful', 'Important', 'Interesting', 'Difficult', 'Technology', 
  'University', 'Information', 'Communication', 'Congratulations', 'Opportunity'
];

const dailySentences = [
  'How are you?', 'What is your name?', 'Where are you from?',
  'I am learning English.', 'Can you help me, please?',
  'I don\'t understand.', 'Could you repeat that, please?',
  'Thank you very much.', 'You are welcome.', 'Have a nice day.',
  'What time is it?', 'I need some water.', 'Where is the bathroom?',
  'How much does this cost?', 'I would like to buy this.',
  'See you later.', 'What do you do?', 'It was nice meeting you.',
  'The weather is beautiful today.', 'I am very busy right now.',
  'Could you please speak more slowly?', 'I have a question.', 'What does this word mean?',
  'Can you give me an example?', 'I am looking for the library.', 'It is a pleasure to meet you.',
  'I need to practice my English.', 'This is my first time here.',
  'The quick brown fox jumps over the lazy dog.', 'I will call you back later.'
];


export const PHONETICS_DATA: Chapter[] = [
  // LECTURE 1 & 2: INTRO TO PHONETICS & IPA
  {
    id: 'lec-1-2',
    title: 'Intro to Phonetics & IPA',
    bengaliTitle: 'ধ্বনিবিজ্ঞান ও IPA পরিচিতি',
    description: 'Phonetics বা ধ্বনিবিজ্ঞান কী, কেন এটি শেখা গুরুত্বপূর্ণ, এবং International Phonetic Alphabet (IPA) এর সাথে প্রাথমিক পরিচিতি।',
    sections: [
      {
        title: 'Phonetics এর সংজ্ঞা',
        content: React.createElement("p", null, "Phonetics হলো ভাষার শব্দ বা ধ্বনি নিয়ে পড়াশোনা। এটি আমাদের শেখায় কীভাবে সঠিকভাবে ইংরেজি শব্দ উচ্চারণ করতে হয়।")
      },
      {
        title: 'কেন শিখবো?',
        content: React.createElement("ul", null,
          React.createElement("li", null, "সঠিক উচ্চারণের জন্য"),
          React.createElement("li", null, "শোনা ও বলা দক্ষতা বাড়াতে"),
          React.createElement("li", null, React.createElement(Speak, null, "Dictionary"), " ব্যবহার করে নিজে নিজে শব্দ শিখতে"),
          React.createElement("li", null, "আত্মবিশ্বাসের সাথে ইংরেজি বলতে")
        )
      },
      {
        title: 'Phonetics এর প্রকারভেদ',
        content: React.createElement(React.Fragment, null,
            React.createElement("ol", null,
                React.createElement("li", null, React.createElement("strong", null, React.createElement(Speak, null, "Articulatory Phonetics")), " - কীভাবে আমরা শব্দ তৈরি করি"),
                React.createElement("li", null, React.createElement("strong", null, React.createElement(Speak, null, "Acoustic Phonetics")), " - শব্দ তরঙ্গ নিয়ে আলোচনা"),
                React.createElement("li", null, React.createElement("strong", null, React.createElement(Speak, null, "Auditory Phonetics")), " - কীভাবে আমরা শব্দ শুনি")
            ),
            React.createElement("p", null, "আমরা মূলত Articulatory Phonetics নিয়ে কাজ করব।")
        )
      },
      {
        title: 'IPA কী?',
        content: React.createElement("p", null, "International Phonetic Alphabet হলো একটি আন্তর্জাতিক প্রতীক ব্যবস্থা যা সব ভাষার শব্দকে লেখার জন্য ব্যবহৃত হয়। ", React.createElement(Speak, null, "Dictionary"), "-তে শব্দের পাশে যে বিশেষ চিহ্ন দেখো, সেগুলোই IPA চিহ্ন।")
      },
      {
        title: 'উদাহরণ:',
        content: React.createElement("ul", null,
          React.createElement("li", null, React.createElement(Speak, {speakAs: "kat"}, "cat"), " = ", React.createElement(Code, null, "/kæt/")),
          React.createElement("li", null, React.createElement(Speak, { speakAs: "book"}, "book"), " = ", React.createElement(Code, null, "/bʊk/")),
          React.createElement("li", null, React.createElement(Speak, { speakAs: "tree" }, "tree"), " = ", React.createElement(Code, null, "/triː/"))
        )
      },
      {
        title: 'মনে রাখার কৌশল:',
        content: React.createElement("p", null, "IPA চিহ্নগুলো ", React.createElement(Speak, {speakAs: "forward slash"}, "forward slash"), " (", React.createElement(Code, null, "/ /"), ") এর মধ্যে লেখা হয়।")
      }
    ]
  },
  // LECTURE 3: VOWELS
  {
    id: 'lec-3-intro',
    title: 'Vowels: Introduction',
    bengaliTitle: 'স্বরধ্বনি: পরিচিতি',
    description: 'Vowel বা স্বরধ্বনি কী এবং এর প্রকারভেদ সম্পর্কে জানুন।',
    sections: [
      {
        title: 'Vowel কী?',
        content: React.createElement("p", null, "যে ধ্বনি উচ্চারণের সময় বাতাস মুখ থেকে বাধাহীনভাবে বের হয়, তাকে ", React.createElement(Speak, null, "Vowel"), " বলে। ইংরেজিতে ৫টি ", React.createElement(Speak, null, "Vowel"), " বর্ণ আছে: a, e, i, o, u। কিন্তু ধ্বনি আছে প্রায় ২০টি!")
      },
      {
        title: 'Vowel এর প্রকারভেদ:',
        content: React.createElement("p", null, "ইংরেজি স্বরধ্বনি প্রধানত দুই প্রকার: ", React.createElement(Speak, null, "Monophthongs"), " (", React.createElement(Speak, null, "Pure Vowels"), ") এবং ", React.createElement(Speak, null, "Diphthongs"), " (মিশ্র স্বরধ্বনি)।")
      }
    ]
  },
  {
    id: 'lec-3-short-vowels',
    title: 'Short Vowels',
    bengaliTitle: 'হ্রস্ব স্বরধ্বনি (Monophthongs)',
    description: 'এক ধ্বনিবিশিষ্ট স্বরধ্বনি যা উচ্চারণে কম সময় লাগে।',
    symbols: [
      { symbol: '/ɪ/', exampleWord: 'bit, sit, fish', ipaTranscription: '/bɪt/', bengaliMeaning: 'একটু, বসা, মাছ', bengaliExplanation: 'বাংলা \'ই\' এর মতো, তবে কিছুটা ছোট করে বলতে হয়।', speakAs: 'bit' },
      { symbol: '/e/', exampleWord: 'bed, red, pen', ipaTranscription: '/bed/', bengaliMeaning: 'বিছানা, লাল, কলম', bengaliExplanation: 'বাংলা \'এ\' এর মতো।', speakAs: 'bed' },
      { symbol: '/æ/', exampleWord: 'cat, bad, hat', ipaTranscription: '/kæt/', bengaliMeaning: 'বিড়াল, খারাপ, টুপি', bengaliExplanation: 'মুখের চোয়াল নীচে নামিয়ে \'অ্যা\' এর মতো উচ্চারণ।', speakAs: 'cat' },
      { symbol: '/ɒ/', exampleWord: 'hot, dog (British)', ipaTranscription: '/hɒt/', bengaliMeaning: 'গরম, কুকুর', bengaliExplanation: 'বাংলা \'অ\' এর মতো উচ্চারণ।', speakAs: 'hot' },
      { symbol: '/ʌ/', exampleWord: 'cup, bus, love', ipaTranscription: '/kʌp/', bengaliMeaning: 'পেয়ালা, বাস, ভালোবাসা', bengaliExplanation: 'অনেকটা বাংলা \'আ\' এর মতো, কিন্তু সংক্ষিপ্ত।', speakAs: 'cup' },
      { symbol: '/ʊ/', exampleWord: 'book, good, put', ipaTranscription: '/bʊk/', bengaliMeaning: 'বই, ভালো, রাখা', bengaliExplanation: 'বাংলা \'উ\' এর মতো, তবে সংক্ষিপ্ত।', speakAs: 'book' },
      { symbol: '/ə/', exampleWord: 'about, sofa', ipaTranscription: '/əˈbaʊt/', bengaliMeaning: 'সম্পর্কে, সোফা', bengaliExplanation: 'একে Schwa বলে। সবচেয়ে প্রচলিত ধ্বনি, খুব দুর্বল ও সংক্ষিপ্ত \'আ\' বা \'অ\' এর মতো শোনায়।', speakAs: 'about' },
    ]
  },
  {
    id: 'lec-3-long-vowels',
    title: 'Long Vowels',
    bengaliTitle: 'দীর্ঘ স্বরধ্বনি (Monophthongs)',
    description: 'এক ধ্বনিবিশিষ্ট স্বরধ্বনি যা উচ্চারণে বেশি সময় লাগে।',
    symbols: [
        { symbol: '/iː/', exampleWord: 'see, eat, key', ipaTranscription: '/siː/', bengaliMeaning: 'देखा, খাওয়া, চাবি', bengaliExplanation: 'বাংলা \'ঈ\' এর মতো দীর্ঘ করে বলতে হয়।', speakAs: 'see' },
        { symbol: '/ɑː/', exampleWord: 'father, car (British)', ipaTranscription: '/ˈfɑːðə/', bengaliMeaning: 'বাবা, গাড়ি', bengaliExplanation: 'মুখ বড় করে, দীর্ঘ \'আ\' এর মতো উচ্চারণ।', speakAs: 'father' },
        { symbol: '/ɔː/', exampleWord: 'door, four, caught', ipaTranscription: '/dɔː/', bengaliMeaning: 'দরজা, চার, ধরা', bengaliExplanation: 'দীর্ঘ \'অ\' এর মতো গোল করে উচ্চারণ করতে হয়।', speakAs: 'door' },
        { symbol: '/uː/', exampleWord: 'food, blue, shoe', ipaTranscription: '/bluː/', bengaliMeaning: 'খাবার, নীল, জুতা', bengaliExplanation: 'বাংলা \'ঊ\' এর মতো দীর্ঘ করে বলতে হয়।', speakAs: 'blue' },
        { symbol: '/ɜː/', exampleWord: 'bird, word, her', ipaTranscription: '/bɜːd/', bengaliMeaning: 'পাখি, শব্দ, তার', bengaliExplanation: 'জিহ্বা না নাড়িয়ে দীর্ঘ \'আ\' এর মতো উচ্চারণ।', speakAs: 'bird' },
    ]
  },
  {
    id: 'lec-3-diphthongs',
    title: 'Diphthongs',
    bengaliTitle: 'মিশ্র স্বরধ্বনি',
    description: 'দুই ধ্বনি মিলে এক ধ্বনি তৈরি হয়।',
    symbols: [
        { symbol: '/eɪ/', exampleWord: 'day, make, great', ipaTranscription: '/deɪ/', bengaliMeaning: 'দিন, তৈরি করা, মহান', bengaliExplanation: '\'এ\' এবং \'ই\' একসাথে দ্রুত বললে যেমন শোনায়।', speakAs: 'day' },
        { symbol: '/aɪ/', exampleWord: 'buy, my, like', ipaTranscription: '/baɪ/', bengaliMeaning: 'কেনা, আমার, পছন্দ', bengaliExplanation: '\'আ\' এবং \'ই\' একসাথে দ্রুত বললে যেমন শোনায়।', speakAs: 'buy' },
        { symbol: '/ɔɪ/', exampleWord: 'boy, toy, voice', ipaTranscription: '/bɔɪ/', bengaliMeaning: 'ছেলে, খেলনা, কণ্ঠ', bengaliExplanation: '\'অ\' এবং \'ই\' একসাথে দ্রুত বলতে হবে।', speakAs: 'boy' },
        { symbol: '/aʊ/', exampleWord: 'now, house, out', ipaTranscription: '/naʊ/', bengaliMeaning: 'এখন, বাড়ি, বাইরে', bengaliExplanation: '\'আ\' এবং \'উ\' একসাথে দ্রুত বলতে হবে।', speakAs: 'now' },
        { symbol: '/əʊ/', exampleWord: 'go, boat, nose (British)', ipaTranscription: '/ɡəʊ/', bengaliMeaning: 'যাওয়া, নৌকা, নাক', bengaliExplanation: '\'ও\' এবং \'উ\' একসাথে দ্রুত বলতে হবে।', speakAs: 'go' },
        { symbol: '/ɪə/', exampleWord: 'here, ear, beer (British)', ipaTranscription: '/hɪə/', bengaliMeaning: 'এখানে, কান, বিয়ার', bengaliExplanation: '\'ই\' এবং \'আ\' একসাথে দ্রুত বলতে হবে।', speakAs: 'here' },
        { symbol: '/eə/', exampleWord: 'there, air, care (British)', ipaTranscription: '/ðeə/', bengaliMeaning: 'সেখানে, বাতাস, যত্ন', bengaliExplanation: '\'এ\' এবং \'আ\' একসাথে দ্রুত বলতে হবে।', speakAs: 'there' },
        { symbol: '/ʊə/', exampleWord: 'poor, tour (British)', ipaTranscription: '/pʊə/', bengaliMeaning: 'গরীব, ভ্রমণ', bengaliExplanation: '\'উ\' এবং \'আ\' একসাথে দ্রুত বলতে হবে।', speakAs: 'poor' },
    ]
  },
  // LECTURE 4: CONSONANTS
  {
    id: 'lec-4',
    title: 'Consonants: Introduction',
    bengaliTitle: 'ব্যঞ্জনধ্বনি: পরিচিতি',
    description: 'Consonant বা ব্যঞ্জনধ্বনি কী এবং এর শ্রেণিবিভাগ (স্থান ও উচ্চারণ পদ্ধতি অনুসারে)।',
    sections: [
        {
            title: 'Consonant কী?',
            content: React.createElement("p", null, "যে ধ্বনি উচ্চারণের সময় বাতাস মুখ, জিহ্বা, দাঁত, ঠোঁট দিয়ে বাধাপ্রাপ্ত হয়, তাকে ", React.createElement(Speak, null, "Consonant"), " বলে। ইংরেজিতে 24টি ", React.createElement(Speak, null, "Consonant"), " ধ্বনি আছে।")
        },
        {
            title: 'স্থান অনুসারে শ্রেণিবিভাগ (Place of Articulation)',
            content: React.createElement("ul", null,
                React.createElement("li", null, React.createElement("strong", null, React.createElement(Speak, null, "Bilabial")), " (দুই ঠোঁট): ", React.createElement(Speak, { speakAs: 'p' }, "/p/"), ", ", React.createElement(Speak, { speakAs: 'b' }, "/b/"), ", ", React.createElement(Speak, { speakAs: 'm' }, "/m/")),
                React.createElement("li", null, React.createElement("strong", null, React.createElement(Speak, null, "Labiodental")), " (ঠোঁট-দাঁত): ", React.createElement(Speak, { speakAs: 'f' }, "/f/"), ", ", React.createElement(Speak, { speakAs: 'v' }, "/v/")),
                React.createElement("li", null, React.createElement("strong", null, React.createElement(Speak, null, "Dental")), " (জিহ্বা-দাঁত): ", React.createElement(Speak, { speakAs: 'thigh' }, "/θ/"), ", ", React.createElement(Speak, { speakAs: 'they' }, "/ð/")),
                React.createElement("li", null, React.createElement("strong", null, React.createElement(Speak, null, "Alveolar")), " (জিহ্বা-মাড়ি): ", React.createElement(Speak, { speakAs: 't' }, "/t/"), ", ", React.createElement(Speak, { speakAs: 'd' }, "/d/"), ", ", React.createElement(Speak, { speakAs: 's' }, "/s/"), ", ", React.createElement(Speak, { speakAs: 'z' }, "/z/"), ", ", React.createElement(Speak, { speakAs: 'n' }, "/n/"), ", ", React.createElement(Speak, { speakAs: 'l' }, "/l/"), ", ", React.createElement(Speak, { speakAs: 'r' }, "/r/")),
                React.createElement("li", null, React.createElement("strong", null, React.createElement(Speak, null, "Palatal")), " (জিহ্বা-তালু): ", React.createElement(Speak, { speakAs: 'shoe' }, "/ʃ/"), ", ", React.createElement(Speak, { speakAs: 'vision' }, "/ʒ/"), ", ", React.createElement(Speak, { speakAs: 'cheese' }, "/tʃ/"), ", ", React.createElement(Speak, { speakAs: 'judge' }, "/dʒ/"), ", ", React.createElement(Speak, { speakAs: 'yes' }, "/j/")),
                React.createElement("li", null, React.createElement("strong", null, React.createElement(Speak, null, "Velar")), " (জিহ্বা-নরম তালু): ", React.createElement(Speak, { speakAs: 'k' }, "/k/"), ", ", React.createElement(Speak, { speakAs: 'g' }, "/g/"), ", ", React.createElement(Speak, { speakAs: 'sing' }, "/ŋ/")),
                React.createElement("li", null, React.createElement("strong", null, React.createElement(Speak, null, "Glottal")), " (গলা): ", React.createElement(Speak, { speakAs: 'h' }, "/h/")),
            )
        },
    ]
  },
  // NEW LECTURE: INTONATION
  {
    id: 'lec-4-intonation',
    title: 'Intonation',
    bengaliTitle: 'স্বরভঙ্গি',
    description: 'বাক্যের অর্থ পরিবর্তনে সুরের ওঠা-নামার ভূমিকা বুঝুন।',
    sections: [
      {
        title: 'Falling Intonation (পতনশীল স্বরভঙ্গি)',
        content: React.createElement(React.Fragment, null,
          React.createElement("p", null, "সাধারণত বিবৃতি, আদেশ, এবং Wh- প্রশ্ন (what, where, why, etc.) এর শেষে স্বর নিচের দিকে নামে।"),
          React.createElement("ul", { className: 'list-disc pl-5 mt-2' },
            React.createElement("li", null, "Statements: ", React.createElement(Speak, null, "I am a student.")),
            React.createElement("li", null, "Commands: ", React.createElement(Speak, null, "Please sit down.")),
            React.createElement("li", null, "Wh- Questions: ", React.createElement(Speak, null, "What is your name?")),
          )
        )
      },
      {
        title: 'Rising Intonation (ঊর্ধ্বগামী স্বরভঙ্গি)',
        content: React.createElement(React.Fragment, null,
          React.createElement("p", null, "Yes/No প্রশ্ন এবং অবাক হওয়া বা অনিশ্চয়তা প্রকাশ করতে স্বর উপরের দিকে ওঠে।"),
          React.createElement("ul", { className: 'list-disc pl-5 mt-2' },
            React.createElement("li", null, "Yes/No Questions: ", React.createElement(Speak, null, "Are you a student?")),
            React.createElement("li", null, "Expressing Surprise: ", React.createElement(Speak, null, "You're a student?")),
            React.createElement("li", null, "Lists (final item falls): ", React.createElement(Speak, null, "I bought apples, bananas, and oranges.")),
          )
        )
      },
      {
        title: 'Comparing Intonation',
        content: React.createElement(React.Fragment, null,
          React.createElement("p", null, "একই বাক্য প্রশ্ন ও বিবৃতিতে কীভাবে আলাদা শোনায়, তা লক্ষ্য করুন:"),
          React.createElement("ul", { className: 'list-disc pl-5 mt-2' },
            React.createElement("li", null, "Statement (Falling): ", React.createElement(Speak, null, "You're coming to the party.")),
            React.createElement("li", null, "Question (Rising): ", React.createElement(Speak, null, "You're coming to the party?")),
          )
        )
      }
    ]
  },
  {
    id: 'lec-4-plosives',
    title: 'Plosives/Stops (স্ফোটক)',
    bengaliTitle: 'উচ্চারণ পদ্ধতি: Plosives',
    description: 'বাতাসকে পুরোপুরি আটকে রেখে হঠাৎ ছেড়ে দিয়ে এই ধ্বনিগুলো তৈরি হয়।',
    symbols: [
        { symbol: '/p/', exampleWord: 'pen, cup', ipaTranscription: '/pen/', bengaliMeaning: 'কলম, কাপ', bengaliExplanation: 'দুই ঠোঁট বন্ধ করে বাতাস আটকে রেখে \'প\' এর মতো উচ্চারণ।', speakAs: 'pen' },
        { symbol: '/b/', exampleWord: 'ball, cab', ipaTranscription: '/bɔːl/', bengaliMeaning: 'বল, ক্যাব', bengaliExplanation: 'দুই ঠোঁট বন্ধ করে \'ব\' এর মতো উচ্চারণ। এটি voiced।', speakAs: 'ball' },
        { symbol: '/t/', exampleWord: 'top, cat', ipaTranscription: '/tɒp/', bengaliMeaning: 'উপরে, বিড়াল', bengaliExplanation: 'জিহ্বার ডগা দিয়ে উপরের মাড়ি স্পর্শ করে \'ট\' এর মতো।', speakAs: 'top' },
        { symbol: '/d/', exampleWord: 'dog, bed', ipaTranscription: '/dɒɡ/', bengaliMeaning: 'কুকুর, বিছানা', bengaliExplanation: 'জিহ্বার ডগা দিয়ে উপরের মাড়ি স্পর্শ করে \'ড\' এর মতো। এটি voiced।', speakAs: 'dog' },
        { symbol: '/k/', exampleWord: 'cat, book', ipaTranscription: '/kæt/', bengaliMeaning: 'বিড়াল, বই', bengaliExplanation: 'জিহ্বার পেছন অংশ নরম তালুতে লাগিয়ে \'ক\' এর মতো।', speakAs: 'cat' },
        { symbol: '/g/', exampleWord: 'go, bag', ipaTranscription: '/ɡəʊ/', bengaliMeaning: 'যাওয়া, ব্যাগ', bengaliExplanation: 'জিহ্বার পেছন অংশ নরম তালুতে লাগিয়ে \'গ\' এর মতো। এটি voiced।', speakAs: 'go' },
    ]
  },
  {
    id: 'lec-4-fricatives',
    title: 'Fricatives (ঘর্ষণজনিত)',
    bengaliTitle: 'উচ্চারণ পদ্ধতি: Fricatives',
    description: 'বাতাসকে একটি সরু পথ দিয়ে ঘর্ষণ করে বের করে এই ধ্বনিগুলো তৈরি হয়।',
    symbols: [
        { symbol: '/f/', exampleWord: 'fish, laugh', ipaTranscription: '/fɪʃ/', bengaliMeaning: 'মাছ, হাসা', bengaliExplanation: 'নিচের ঠোঁট উপরের দাঁতে লাগিয়ে \'ফ\' এর মতো।', speakAs: 'fish' },
        { symbol: '/v/', exampleWord: 'van, love', ipaTranscription: '/væn/', bengaliMeaning: 'ভ্যান, ভালোবাসা', bengaliExplanation: 'নিচের ঠোঁট উপরের দাঁতে লাগিয়ে \'ভ\' এর মতো। এটি voiced।', speakAs: 'van' },
        { symbol: '/θ/', exampleWord: 'think, bath', ipaTranscription: '/θɪŋk/', bengaliMeaning: 'ভাবা, গোসল', bengaliExplanation: 'জিহ্বার ডগা দুই পাটি দাঁতের মাঝে রেখে \'থ\' এর মতো। (voiceless)', speakAs: 'think' },
        { symbol: '/ð/', exampleWord: 'this, brother', ipaTranscription: '/ðɪs/', bengaliMeaning: 'এই, ভাই', bengaliExplanation: 'জিহ্বার ডগা দুই পাটি দাঁতের মাঝে রেখে \'দ\' এর মতো। (voiced)', speakAs: 'this' },
        { symbol: '/s/', exampleWord: 'sun, bus', ipaTranscription: '/sʌn/', bengaliMeaning: 'সূর্য, বাস', bengaliExplanation: 'বাংলা \'স\' এর মতো।', speakAs: 'sun' },
        { symbol: '/z/', exampleWord: 'zoo, is', ipaTranscription: '/zuː/', bengaliMeaning: 'চিড়িয়াখানা, হয়', bengaliExplanation: 'কম্পনসহ \'য\' বা \'জ\' এর মতো।', speakAs: 'zoo' },
        { symbol: '/ʃ/', exampleWord: 'ship, fish', ipaTranscription: '/ʃɪp/', bengaliMeaning: 'জাহাজ, মাছ', bengaliExplanation: 'বাংলা \'শ\' এর মতো।', speakAs: 'ship' },
        { symbol: '/ʒ/', exampleWord: 'pleasure, vision', ipaTranscription: '/ˈpleʒə/', bengaliMeaning: 'আনন্দ, দৃষ্টি', bengaliExplanation: 'কম্পনসহ \'শ\' এর মতো।', speakAs: 'pleasure' },
        { symbol: '/h/', exampleWord: 'house, hello', ipaTranscription: '/haʊs/', bengaliMeaning: 'বাড়ি, হ্যালো', bengaliExplanation: 'বাংলা \'হ\' এর মতো।', speakAs: 'house' },
    ]
  },
  {
    id: 'lec-4-others',
    title: 'Other Consonants',
    bengaliTitle: 'অন্যান্য ব্যঞ্জনধ্বনি',
    description: 'Affricates, Nasals, Liquids, এবং Glides সম্পর্কে জানুন।',
    symbols: [
        { symbol: '/tʃ/', exampleWord: 'chair, watch', ipaTranscription: '/tʃeə/', bengaliMeaning: 'চেয়ার, দেখা', bengaliExplanation: 'Plosive /t/ এবং Fricative /ʃ/ মিলে তৈরি। বাংলা \'চ\' এর মতো।', speakAs: 'chair' },
        { symbol: '/dʒ/', exampleWord: 'jump, bridge', ipaTranscription: '/dʒʌmp/', bengaliMeaning: 'লাফানো, সেতু', bengaliExplanation: 'Plosive /d/ এবং Fricative /ʒ/ মিলে তৈরি। বাংলা \'জ\' এর মতো।', speakAs: 'jump' },
        { symbol: '/m/', exampleWord: 'man, home', ipaTranscription: '/mæn/', bengaliMeaning: 'মানুষ, বাড়ি', bengaliExplanation: 'নাক দিয়ে বাতাস বের করে \'ম\' এর মতো।', speakAs: 'man' },
        { symbol: '/n/', exampleWord: 'no, sun', ipaTranscription: '/nəʊ/', bengaliMeaning: 'না, সূর্য', bengaliExplanation: 'নাক দিয়ে বাতাস বের করে \'ন\' এর মতো।', speakAs: 'no' },
        { symbol: '/ŋ/', exampleWord: 'sing, think', ipaTranscription: '/sɪŋ/', bengaliMeaning: 'গান করা, ভাবা', bengaliExplanation: 'নাক দিয়ে বাতাস বের করে \'ং\' এর মতো।', speakAs: 'sing' },
        { symbol: '/l/', exampleWord: 'love, ball', ipaTranscription: '/lʌv/', bengaliMeaning: 'ভালোবাসা, বল', bengaliExplanation: 'বাংলা \'ল\' এর মতো।', speakAs: 'love' },
        { symbol: '/r/', exampleWord: 'red, car', ipaTranscription: '/red/', bengaliMeaning: 'লাল, গাড়ি', bengaliExplanation: 'বাংলা \'র\' এর মতো, তবে জিহ্বা উল্টিয়ে নয়।', speakAs: 'red' },
        { symbol: '/w/', exampleWord: 'water, away', ipaTranscription: '/ˈwɔːtə/', bengaliMeaning: 'পানি, দূরে', bengaliExplanation: 'ঠোঁট গোল করে \'ওয়া\' এর মতো।', speakAs: 'water' },
        { symbol: '/j/', exampleWord: 'yes, use', ipaTranscription: '/jes/', bengaliMeaning: 'হ্যাঁ, ব্যবহার', bengaliExplanation: 'বাংলা \'ইয়\' এর মতো।', speakAs: 'yes' },
    ]
  },
    // LECTURE 5: VOICED VS VOICELESS
  {
    id: 'lec-5',
    title: 'Voiced vs Voiceless',
    bengaliTitle: 'ঘোষ বনাম অঘোষ ধ্বনি',
    description: 'Voiced (ঘোষ) এবং Voiceless (অঘোষ) ব্যঞ্জনধ্বনির মধ্যে পার্থক্য বুঝুন।',
    sections: [
        {
            title: 'পার্থক্য কী?',
            content: React.createElement("div", null,
                React.createElement("p", null, React.createElement("strong", null, "Voiceless (অঘোষ):"), " গলার স্বরতন্ত্রী (vocal cords) কম্পিত হয় না। যেমন: /p/, /t/, /k/, /f/, /θ/, /s/, /ʃ/, /tʃ/"),
                React.createElement("p", null, React.createElement("strong", null, "Voiced (ঘোষ):"), " গলার স্বরতন্ত্রী কম্পিত হয়। যেমন: /b/, /d/, /g/, /v/, /ð/, /z/, /ʒ/, /dʒ/ এবং সব Nasals, Liquids, Glides।")
            )
        },
        {
            title: 'পরীক্ষা করার উপায়:',
            content: React.createElement("p", null, "গলায় হাত রেখে শব্দ উচ্চারণ করো। যদি কম্পন অনুভব করো, তাহলে সেটি Voiced।")
        },
        {
            title: 'Pair তালিকা:',
            content: React.createElement("ul", null,
                React.createElement("li", null, React.createElement(Speak, {speakAs: "pen"}, "pen"), " (/p/) - ", React.createElement(Speak, {speakAs: "ben"}, "ben"), " (/b/)"),
                React.createElement("li", null, React.createElement(Speak, {speakAs: "ten"}, "ten"), " (/t/) - ", React.createElement(Speak, {speakAs: "den"}, "den"), " (/d/)"),
                React.createElement("li", null, React.createElement(Speak, {speakAs: "came"}, "came"), " (/k/) - ", React.createElement(Speak, {speakAs: "game"}, "game"), " (/g/)"),
                React.createElement("li", null, React.createElement(Speak, {speakAs: "fan"}, "fan"), " (/f/) - ", React.createElement(Speak, {speakAs: "van"}, "van"), " (/v/)"),
                React.createElement("li", null, React.createElement(Speak, {speakAs: "sue"}, "sue"), " (/s/) - ", React.createElement(Speak, {speakAs: "zoo"}, "zoo"), " (/z/)"),
                React.createElement("li", null, React.createElement(Speak, {speakAs: "thin"}, "thin"), " (/θ/) - ", React.createElement(Speak, {speakAs: "then"}, "then"), " (/ð/)"),
            )
        }
    ]
  },
  // LECTURE 6: SYLLABLE & STRESS
  {
    id: 'lec-6',
    title: 'Syllable & Word Stress',
    bengaliTitle: 'সিলেবল ও স্ট্রেস',
    description: 'Syllable (দল) এবং Word Stress (শব্দে জোর) কী এবং কেন গুরুত্বপূর্ণ।',
    sections: [
        {
            title: 'Syllable কী?',
            content: React.createElement(React.Fragment, null,
                React.createElement("p", null, "এক নিঃশ্বাসে উচ্চারিত শব্দের অংশকে Syllable বলে। প্রতিটি Syllable-এ অন্তত একটি Vowel থাকে।"),
                React.createElement("ul", null,
                    React.createElement("li", null, React.createElement(Speak, {speakAs: "cat"}, "cat"), " = 1 syllable"),
                    React.createElement("li", null, React.createElement(Speak, {speakAs: "water"}, "wa-ter"), " = 2 syllables"),
                    React.createElement("li", null, React.createElement(Speak, {speakAs: "computer"}, "com-pu-ter"), " = 3 syllables"),
                    React.createElement("li", null, React.createElement(Speak, {speakAs: "university"}, "u-ni-ver-si-ty"), " = 5 syllables"),
                )
            )
        },
        {
            title: 'Word Stress কী?',
            content: React.createElement(React.Fragment, null,
                React.createElement("p", null, "একাধিক Syllable-যুক্ত শব্দে একটির উপর বেশি জোর দিয়ে উচ্চারণ করা হয়। Dictionary-তে stress চিহ্ন /'/ দিয়ে দেখানো হয়।"),
                React.createElement("ul", null,
                    React.createElement("li", null, React.createElement(Speak, {speakAs: "FOH-toh"}, "PHO-to"), " = /", React.createElement("strong", null, "'fəʊtəʊ"), "/ (প্রথম syllable-এ stress)"),
                    React.createElement("li", null, React.createElement(Speak, {speakAs: "fuh-TOG-ruff"}, "pho-TO-graph"), " = /fə", React.createElement("strong", null, "'tɒɡrəf"), "/ (দ্বিতীয় syllable-এ stress)"),
                    React.createElement("li", null, React.createElement(Speak, {speakAs: "foh-toh-GRAFF-ick"}, "pho-to-GRA-phic"), " = /ˌfəʊtə", React.createElement("strong", null, "'ɡræfɪk"), "/ (তৃতীয় syllable-এ মূল stress)"),
                )
            )
        },
        {
            title: 'Stress এর নিয়ম:',
            content: React.createElement("ol", null,
                React.createElement("li", null, "বেশিরভাগ দুই-syllable noun-এ প্রথমে stress থাকে: ", React.createElement(Speak, { speakAs: "REK-ord" }, "RE-cord"), ", ", React.createElement(Speak, { speakAs: "PREZ-ent" }, "PRE-sent")),
                React.createElement("li", null, "বেশিরভাগ দুই-syllable verb-এ দ্বিতীয়তে stress থাকে: ", React.createElement(Speak, { speakAs: "ri-CORD" }, "re-CORD"), ", ", React.createElement(Speak, { speakAs: "pri-ZENT" }, "pre-SENT")),
                React.createElement("li", null, "Compound noun-এ প্রথম শব্দে stress: ", React.createElement(Speak, { speakAs: "BLACK-board" }, "BLACK-board"), ", ", React.createElement(Speak, { speakAs: "BOOK-shop" }, "BOOK-shop")),
            )
        }
    ]
  },
  // LECTURE 7: CONNECTED SPEECH & LINKING
  {
    id: 'lec-7',
    title: 'Connected Speech & Linking',
    bengaliTitle: 'সংযুক্ত কথন ও লিঙ্কিং',
    description: 'স্বাভাবিক কথোপকথনে শব্দগুলো কীভাবে একসাথে মিলে উচ্চারিত হয়।',
    sections: [
        {
            title: 'Consonant to Vowel Linking',
            content: React.createElement("p", null, "শেষ consonant পরের vowel এর সাথে যুক্ত হয়। যেমন: ", React.createElement(Speak, { speakAs: "anapple" }, "an apple"), ", ", React.createElement(Speak, { speakAs: "sitdown" }, "sit down"), "।")
        },
        {
            title: '/w/ Sound Insertion',
            content: React.createElement("p", null, "যখন /uː/, /əʊ/, /aʊ/ পরে vowel আসে। যেমন: ", React.createElement(Speak, { speakAs: "gowaway" }, "go away"), "।")
        },
        {
            title: '/j/ Sound Insertion',
            content: React.createElement("p", null, "যখন /iː/, /aɪ/, /eɪ/ পরে vowel আসে। যেমন: ", React.createElement(Speak, { speakAs: "seeyit" }, "see it"), "।")
        },
        {
            title: "Intrusive /r/ (অনুপ্রবেশী 'r')",
            content: React.createElement(React.Fragment, null, 
                React.createElement("p", null, "British English (Non-rhotic accents) এ যখন একটি শব্দ /ə/, /ɪə/, /ɑː/, বা /ɔː/ দিয়ে শেষ হয় এবং পরের শব্দটি Vowel দিয়ে শুরু হয়, তখন উচ্চারণের সুবিধার জন্য একটি /r/ ধ্বনি যোগ করা হয়।"),
                React.createElement("ul", { className: 'list-disc pl-5 mt-2' },
                    React.createElement("li", { className: 'mb-1' }, React.createElement(Speak, { variant: 'uk', speakAs: "the idea rof it" }, "the idea of it"), React.createElement("span", null, " - (", React.createElement(Code, null, "/aɪˈdɪə/"), " + ", React.createElement(Code, null, "/əv/"), ")")),
                    React.createElement("li", { className: 'mb-1' }, React.createElement(Speak, { variant: 'uk', speakAs: "I saw ra film" }, "I saw a film"), React.createElement("span", null, " - (", React.createElement(Code, null, "/sɔː/"), " + ", React.createElement(Code, null, "/ə/"), ")")),
                    React.createElement("li", { className: 'mb-1' }, React.createElement(Speak, { variant: 'uk', speakAs: "law rand order" }, "law and order"), React.createElement("span", null, " - (", React.createElement(Code, null, "/lɔː/"), " + ", React.createElement(Code, null, "/ænd/"), ")"))
                )
            )
        },
    ]
  },
  // LECTURE 8: ASSIMILATION
  {
    id: 'lec-8',
    title: 'Assimilation (সংমিশ্রণ)',
    bengaliTitle: 'Assimilation (সংমিশ্রণ)',
    description: 'A phonological process where one sound changes to become more similar to another nearby sound.',
    sections: [
      {
        title: 'Types of Assimilation',
        content: React.createElement(React.Fragment, null,
          React.createElement("p", {className: "font-semibold text-lg text-green-800"}, "1. Place Assimilation"),
          React.createElement("p", null, "A consonant changes its place of articulation to match a neighboring sound."),
          React.createElement("ul", { className: 'list-disc pl-5 my-2' },
            React.createElement("li", null, "“in + possible” → impossible ", React.createElement(Speak, { speakAs: "impossible"}, "/ɪmˈpɒsɪbəl/"), " (the ", React.createElement(Code, null, "/n/"), " becomes ", React.createElement(Code, null, "/m/"), " before ", React.createElement(Code, null, "/p/"), " because /p/ is bilabial)"),
            React.createElement("li", null, "“ten bikes” → tem bikes ", React.createElement(Speak, { speakAs: "tem bikes"}, "/tem baɪks/"), " (the ", React.createElement(Code, null, "/n/"), " changes to ", React.createElement(Code, null, "/m/"), " before ", React.createElement(Code, null, "/b/)"), ")")
          ),
          React.createElement("p", {className: "font-semibold text-lg text-green-800 mt-4"}, "2. Voicing Assimilation"),
          React.createElement("p", null, "A consonant changes its voicing (voiced ↔ voiceless) to match the adjacent sound."),
           React.createElement("ul", { className: 'list-disc pl-5 my-2' },
             React.createElement("li", null, "“have to” → haf to ", React.createElement(Speak, { speakAs: "haf to" }, "/hæf tuː/"), " (the ", React.createElement(Code, null, "/v/"), " becomes voiceless ", React.createElement(Code, null, "/f/"), " before the voiceless ", React.createElement(Code, null, "/t/)"), ")"),
             React.createElement("li", null, React.createElement(Speak, { speakAs: "dogs" }, "dogs"), " ", React.createElement(Code, null, "/dɒɡz/"), " vs ", React.createElement(Speak, { speakAs: "cats" }, "cats"), " ", React.createElement(Code, null, "/kæts/"), " (/z/ is voiced after voiced /ɡ/, /s/ is voiceless after voiceless /t/)")
          ),
          React.createElement("p", {className: "font-semibold text-lg text-green-800 mt-4"}, "3. Manner Assimilation"),
          React.createElement("p", null, "A sound changes its manner of articulation (e.g., stop → nasal) to become more like a nearby sound."),
          React.createElement("ul", { className: 'list-disc pl-5 my-2' },
             React.createElement("li", null, "Example: “that man” → [ðæp mæn] or [ðæm mæn] (in rapid speech)")
          ),
        )
      },
      {
        title: 'Progressive vs. Regressive Assimilation',
        content: React.createElement(React.Fragment, null,
           React.createElement("p", { className: 'mb-2' }, React.createElement("strong", null, "Progressive:"), " The first sound influences the next one."),
           React.createElement("ul", { className: 'list-disc pl-5 mb-2' }, React.createElement("li", null, "e.g., plural endings: ", React.createElement(Speak, { speakAs: "cats" }, "cats"), " ", React.createElement(Code, null, "/s/"), ", ", React.createElement(Speak, { speakAs: "dogs" }, "dogs"), " ", React.createElement(Code, null, "/z/"))),
           React.createElement("p", { className: 'mb-2' }, React.createElement("strong", null, "Regressive:"), " The second sound influences the previous one."),
           React.createElement("ul", { className: 'list-disc pl-5 mb-2' }, React.createElement("li", null, "e.g., “input” → “imput” ", React.createElement(Speak, { speakAs: "imput" }, "/ɪmpʊt/"), " (the ", React.createElement(Code, null, "/p/"), " affects the ", React.createElement(Code, null, "/n/)"), ")"))
        )
      }
    ]
  },
  // LECTURE 9: ELISION
  {
    id: 'lec-9',
    title: 'Elision (লোপ)',
    bengaliTitle: 'Elision (লোপ)',
    description: 'দ্রুত কথা বলার সময় কিছু ধ্বনি সম্পূর্ণ উচ্চারণ না করা।',
    sections: [
        {
            title: 'Weak Vowel Deletion',
            content: React.createElement("p", null, "মাঝের দুর্বল /ə/ প্রায় উচ্চারণ হয় না। যেমন: ", React.createElement(Speak, { speakAs: "camra" }, "camera"), ", ", React.createElement(Speak, { speakAs: "choclate" }, "chocolate"), "।")
        },
        {
            title: 'Consonant Cluster Simplification',
            content: React.createElement("p", null, "তিন consonant একসাথে থাকলে মাঝেরটা লোপ পায়। যেমন: ", React.createElement(Speak, { speakAs: "nex door" }, "next door"), ", ", React.createElement(Speak, { speakAs: "posman" }, "postman"), "।")
        },
        {
            title: '/h/ Dropping',
            content: React.createElement("p", null, "Weak forms-এ /h/ লোপ পায়। যেমন: ", React.createElement(Speak, { speakAs: "giv im" }, "give him"), ", ", React.createElement(Speak, { speakAs: "tel er" }, "tell her"), "।")
        },
    ]
  },
  // LECTURE 10: WEAK FORMS
  {
    id: 'lec-10',
    title: 'Weak Forms (দুর্বল রূপ)',
    bengaliTitle: 'Weak Forms (দুর্বল রূপ)',
    description: 'Function words (preposition, article, auxiliary verb) সাধারণত দুর্বলভাবে উচ্চারিত হয়।',
    sections: [
        {
            title: 'গুরুত্বপূর্ণ Weak Forms',
            content: React.createElement("table", null,
                React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "শব্দ"), React.createElement("th", null, "Strong Form"), React.createElement("th", null, "Weak Form (Pronunciation)"))),
                React.createElement("tbody", null,
                    React.createElement("tr", null, React.createElement("td", null, "a"), React.createElement("td", null, React.createElement(Speak, {speakAs: "ay"}, "/eɪ/")), React.createElement("td", null, React.createElement(Speak, {speakAs: "uh"}, "/ə/"))),
                    React.createElement("tr", null, React.createElement("td", null, "the"), React.createElement("td", null, React.createElement(Speak, {speakAs: "thee"}, "/ðiː/")), React.createElement("td", null, React.createElement(Speak, {speakAs: "thuh"}, "/ðə/"))),
                    React.createElement("tr", null, React.createElement("td", null, "and"), React.createElement("td", null, React.createElement(Speak, null, "and")), React.createElement("td", null, React.createElement(Speak, {speakAs: "n"}, "/ən/, /n/"))),
                    React.createElement("tr", null, React.createElement("td", null, "for"), React.createElement("td", null, React.createElement(Speak, {variant: 'us'}, "for")), React.createElement("td", null, React.createElement(Speak, {speakAs: "fer"}, "/fə/"))),
                    React.createElement("tr", null, React.createElement("td", null, "can"), React.createElement("td", null, React.createElement(Speak, {speakAs: "kan"}, "can")), React.createElement("td", null, React.createElement(Speak, {speakAs: "kn"}, "/kən/"))),
                )
            )
        },
        {
            title: 'Strong Form কখন হয়?',
            content: React.createElement("ul", null,
                React.createElement("li", null, "বাক্যের শেষে: ", React.createElement(Speak, {variant: 'us'}, "What are you waiting FOR?")),
                React.createElement("li", null, "Emphasis-এ: ", React.createElement(Speak, null, "I CAN do it!")),
            )
        }
    ]
  },
  // ... (Adding more lectures based on the original PDF structure)
  {
    id: 'lec-16',
    title: 'British vs American Pronunciation',
    bengaliTitle: 'ব্রিটিশ বনাম আমেরিকান উচ্চারণ',
    description: 'ব্রিটিশ এবং আমেরিকান ইংরেজির উচ্চারণের প্রধান পার্থক্যসমূহ।',
    sections: [
      {
        title: '/ɒ/ vs /ɑː/ Sound',
        content: React.createElement(React.Fragment, null,
          React.createElement("p", null, "British: /ɒ/ (rounded lips), American: /ɑː/ (open mouth)"),
          React.createElement("table", null,
            React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "শব্দ"), React.createElement("th", null, "British"), React.createElement("th", null, "American"))),
            React.createElement("tbody", null,
              React.createElement("tr", null, React.createElement("td", null, "hot"), React.createElement("td", null, React.createElement(Speak, {variant: 'uk'}, "hot")), React.createElement("td", null, React.createElement(Speak, {variant: 'us'}, "hot"))),
              React.createElement("tr", null, React.createElement("td", null, "dog"), React.createElement("td", null, React.createElement(Speak, {variant: 'uk'}, "dog")), React.createElement("td", null, React.createElement(Speak, {variant: 'us'}, "dog"))),
            )
          )
        )
      },
      {
        title: 'R-colored Vowels (Rhoticity)',
        content: React.createElement(React.Fragment, null,
          React.createElement("p", null, "British: শব্দের শেষে বা consonant আগে /r/ উচ্চারণ হয় না। American: সব জায়গায় /r/ উচ্চারণ হয়।"),
          React.createElement("table", null,
            React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "শব্দ"), React.createElement("th", null, "British"), React.createElement("th", null, "American"))),
            React.createElement("tbody", null,
              React.createElement("tr", null, React.createElement("td", null, "car"), React.createElement("td", null, React.createElement(Speak, {variant: 'uk'}, "car")), React.createElement("td", null, React.createElement(Speak, {variant: 'us'}, "car"))),
              React.createElement("tr", null, React.createElement("td", null, "hard"), React.createElement("td", null, React.createElement(Speak, {variant: 'uk'}, "hard")), React.createElement("td", null, React.createElement(Speak, {variant: 'us'}, "hard"))),
            )
          )
        )
      },
      {
        title: '/t/ Sound (Flapping)',
        content: React.createElement(React.Fragment, null,
          React.createElement("p", null, "American English-এ vowels এর মাঝে /t/ প্রায় /d/ এর মতো শোনায়।"),
          React.createElement("table", null,
            React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "শব্দ"), React.createElement("th", null, "British"), React.createElement("th", null, "American"))),
            React.createElement("tbody", null,
              React.createElement("tr", null, React.createElement("td", null, "water"), React.createElement("td", null, React.createElement(Speak, {variant: 'uk'}, "water")), React.createElement("td", null, React.createElement(Speak, {variant: 'us', speakAs: 'wader'}, "water"))),
              React.createElement("tr", null, React.createElement("td", null, "better"), React.createElement("td", null, React.createElement(Speak, {variant: 'uk'}, "better")), React.createElement("td", null, React.createElement(Speak, {variant: 'us', speakAs: 'bedder'}, "better"))),
            )
          )
        )
      }
    ]
  },
  {
    id: 'lec-17',
    title: 'Word Stress Patterns (Advanced)',
    bengaliTitle: 'ওয়ার্ড স্ট্রেস প্যাটার্ন (অ্যাডভান্সড)',
    description: 'Noun বনাম Verb এবং Compound Noun-এর স্ট্রেস প্যাটার্নের নিয়মাবলী।',
    sections: [
        {
            title: 'Noun vs Verb Stress Shift',
            content: React.createElement(React.Fragment, null,
                React.createElement("p", null, "দুই-syllable শব্দে প্রায়ই noun এ প্রথম, verb এ দ্বিতীয় syllable stressed হয়।"),
                React.createElement("table", null,
                    React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "শব্দ"), React.createElement("th", null, "Noun"), React.createElement("th", null, "Verb"))),
                    React.createElement("tbody", null,
                        React.createElement("tr", null, React.createElement("td", null, "record"), React.createElement("td", null, React.createElement(Speak, { speakAs: "REK-ord" }, "REcord")), React.createElement("td", null, React.createElement(Speak, { speakAs: "ri-CORD" }, "reCORD"))),
                        React.createElement("tr", null, React.createElement("td", null, "present"), React.createElement("td", null, React.createElement(Speak, { speakAs: "PREZ-ent" }, "PREsent")), React.createElement("td", null, React.createElement(Speak, { speakAs: "pri-ZENT" }, "preSENT"))),
                        React.createElement("tr", null, React.createElement("td", null, "object"), React.createElement("td", null, React.createElement(Speak, { speakAs: "OB-jekt" }, "OBject")), React.createElement("td", null, React.createElement(Speak, { speakAs: "ub-JEKT" }, "obJECT"))),
                    )
                )
            )
        }
    ]
  },
  {
    id: 'lec-20',
    title: 'Silent Letters',
    bengaliTitle: 'নীরব বর্ণ',
    description: 'সাধারণ শব্দ যেখানে কিছু বর্ণ লেখা হলেও উচ্চারণ করা হয় না।',
    sections: [
      {
        title: 'Silent B, C, D',
        content: React.createElement("ul", null,
          React.createElement("li", null, "Silent B (mb, bt এর শেষে): ", React.createElement(Speak, { speakAs: "clime" }, "climb"), ", ", React.createElement(Speak, { speakAs: "lam" }, "lamb"), ", ", React.createElement(Speak, { speakAs: "det" }, "debt")),
          React.createElement("li", null, "Silent C (sc combination-এ): ", React.createElement(Speak, { speakAs: "sience" }, "science"), ", ", React.createElement(Speak, null, "scissors")),
          React.createElement("li", null, "Silent D (কিছু common শব্দে): ", React.createElement(Speak, { speakAs: "wensday" }, "Wednesday"), ", ", React.createElement(Speak, { speakAs: "hansome" }, "handsome")),
        )
      },
      {
        title: 'Silent K, L, P, T',
        content: React.createElement("ul", null,
          React.createElement("li", null, "Silent K (kn দিয়ে শুরু হলে): ", React.createElement(Speak, { speakAs: "no" }, "know"), ", ", React.createElement(Speak, { speakAs: "nife" }, "knife")),
          React.createElement("li", null, "Silent L: ", React.createElement(Speak, { speakAs: "wood" }, "would"), ", ", React.createElement(Speak, { speakAs: "shood" }, "should"), ", ", React.createElement(Speak, { speakAs: "cahm" }, "calm")),
          React.createElement("li", null, "Silent P (ps, pn, pt দিয়ে শুরু হলে): ", React.createElement(Speak, { speakAs: "sy-cology" }, "psychology"), ", ", React.createElement(Speak, { speakAs: "new-monia" }, "pneumonia")),
          React.createElement("li", null, "Silent T: ", React.createElement(Speak, { speakAs: "lis-en" }, "listen"), ", ", React.createElement(Speak, { speakAs: "cas-el" }, "castle"), ", ", React.createElement(Speak, { speakAs: "offen" }, "often")),
        )
      }
    ]
  },
  // IPA CHART
  {
    id: 'ipa-chart',
    title: 'IPA Chart',
    bengaliTitle: 'আন্তর্জাতিক ধ্বনিমূলক বর্ণমালা',
    description: 'সবগুলো IPA চিহ্ন এক জায়গায়। প্রতিটি চিহ্নে ক্লিক করে তার উচ্চারণ ও উদাহরণ শুনুন।',
    sections: [
      {
        title: '',
        content: React.createElement(IPAChart, null)
      }
    ]
  },
  // FEEDBACK CHAPTER
  {
    id: 'lec-21-feedback',
    title: 'Pronunciation Practice',
    bengaliTitle: 'উচ্চারণ অনুশীলন',
    description: 'দৈনন্দিন ব্যবহৃত শব্দ এবং বাক্য উচ্চারণ করে আপনার দক্ষতা পরীক্ষা করুন এবং স্কোর দেখুন।',
    sections: [
      {
        title: '',
        content: React.createElement(FeedbackWorkspace, { words: dailyWords, sentences: dailySentences })
      }
    ]
  },
];