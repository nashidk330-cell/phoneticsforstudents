import React from 'react';

export const Introduction: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 text-center flex flex-col items-center">
        <div className="bg-blue-100 p-4 rounded-full mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h-3.234a1 1 0 01-.864-.47L6.5 13H5a1 1 0 01-1-1V7a1 1 0 011-1h1.5l1.364-2.53A1 1 0 019.234 3h5.532a1 1 0 01.864.47L18.5 7H20a1 1 0 011 1v5a1 1 0 01-1 1h-1.5l-1.364 2.53a1 1 0 01-.864.47z" />
            </svg>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold font-bengali text-green-800 mb-2">
           ফনেটিক্স নোটবুকে স্বাগতম!
        </h1>
        <p className="text-green-800 max-w-2xl mx-auto font-bengali">
            এটি একটি ইন্টারেক্টিভ লার্নিং টুল যা বাংলাদেশী শিক্ষার্থীদের ইংরেজি শব্দের সঠিক উচ্চারণ শিখতে সাহায্য করার জন্য তৈরি করা হয়েছে। বাম পাশের মেনু থেকে একটি বিষয় নির্বাচন করে আপনার শেখা শুরু করুন।
        </p>
    </div>
  );
};
