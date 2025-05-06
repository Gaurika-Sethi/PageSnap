'use client';

import React, { useState } from 'react';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], weight: '400' });

function WordHelper() {
  const [word, setWord] = useState('');
  const [meaning, setMeaning] = useState('');

  const handleExplain = () => {
    // You’ll replace this with real AI response later
    setMeaning(`The word "${word}" means: A sudden realization or insight, especially a profound one.`);
  };

  const handleAdd = () => {
    // Do something with the word & meaning (e.g., save to database or list)
    console.log('Saved:', word, meaning);
  };

  return (
    <div className={`min-h-screen flex flex-col items-center p-12 mt-20 ${playfair.className}`}>
      <div className="relative flex items-center justify-center w-full  mb-12">
           <img
             src="/vine_left.png"
             alt="left vine"
             className="w-[200px] h-auto absolute left-0 top-[30%] -translate-y-[70%]"
             />

           <h1 className="text-[40px] text-[#2E2E2E] text-center z-10">Understand Your Quotes Better</h1>

           <img
            src="/vine_right.png"
            alt="right vine"
            className="w-[200px] h-auto absolute right-0 top-[30%] -translate-y-[70%]"
          />
      </div>


      <div className="w-full max-w-[600px] mb-6">
        <label className="block text-[20px] text-[#2E2E2E] mb-2">Enter a word you want to understand</label>
        <div className="flex items-center gap-4">
          <input
            type="text"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            placeholder="e.g., epiphany"
            className="placeholder-mc placeholder:text-[#6D4C41] placeholder:text-[14px] text-[#5c423a] text-[18px] flex-grow h-[60px] px-4 bg-[#DAC29A] border-[3px] border-[#8B5E3C] hover:border-[#C9A66B] focus:outline-none"
          />
          <button
            onClick={handleExplain}
            className="px-4 py-1.5 bg-[#D4AF87] border-[3px] border-[#8B5E3C] rounded-[30px] hover:border-[#C9A66B] transition">
            Explain
          </button>
        </div>
      </div>

      <div className="w-full max-w-[600px] bg-[#DAC29A] border-[3px] border-[#8B5E3C] p-4 text-[#2E2E2E] flex flex-col">
        <div className="flex-grow">
          {meaning ? (
            <p>{meaning}</p>
          ) : (
            <p className="italic text-[#6D4C41]">The meaning will appear here after you click "Explain"</p>
          )}
        </div>
        {meaning && (
          <div className="flex justify-end mt-4">
            <button
              onClick={handleAdd}
              className="px-4 py-1 bg-[#D4AF87] border-[3px] border-[#8B5E3C] rounded-[20px] hover:border-[#C9A66B] transition"
            >
              Add
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default WordHelper;


