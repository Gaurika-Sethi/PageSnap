'use client';
import {Playfair_Display, McLaren} from 'next/font/google'
const play = Playfair_Display({ subsets: ['latin'], weight: '400' })
const mc = McLaren({ subsets: ['latin'], weight: '400' })
import { useState, ChangeEvent } from 'react';

function Textify() {
    const [quote, setQuote] = useState('');
    const [fontStyle, setFontStyle] = useState('');
    const [bgColor, setBgColor] = useState('');
    const [shape, setShape] = useState('');
    const [stylePreset, setStylePreset] = useState('');
    const [sticker, setSticker] = useState('');
    const [error, setError] = useState('');
    const [isGenerated, setIsGenerated] = useState(false); // 🆕 new state to track
  
    const handleQuoteChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setQuote(e.target.value);
    };
  
    const handleGenerateSticker = () => {
      if (!fontStyle || !bgColor || !shape || !stylePreset) {
        setError('Please select all options before generating your sticker!');
        return;
      }
      setError('');
      setSticker(quote);
      setIsGenerated(true); // ✅ set as generated
    };
  
    const handleSaveSticker = () => {
      console.log('Saving sticker...'); //implement downloading or saving logic here
    };
  
    return(
        <div className={`${play.className} min-h-screen flex flex-col items-start justify-start p-8 `}>
        <div className='flex flex-col items-start justify-start mb-12'>
          <h1 className="text-[#2E2E2E] text-[50px]">Turn Words Into Art</h1>
          <img
            src="/vine_bottom.png"
            alt="bottom vine"
            className="w-[350px] h-auto"
           />
        </div>

        <textarea
          className="w-full max-w-2xl h-32 p-4 focus:outline-none focus:ring-0 placeholder-mc placeholder:text-[#6D4C41] placeholder:text-[14px] text-[#5c423a] text-[18px]  bg-[#DAC29A] border-[3px] border-[#8B5E3C] hover:border-[#C9A66B] mb-10"
          placeholder="paste your favorite quote here..."
          value={quote}
          onChange={handleQuoteChange}
        />
  
        <div className="flex flex-wrap gap-4">
        <select
          className="p-2 focus:outline-none focus:ring-0 bg-[#D4AF87] border-[3px] border-[#8B5E3C] text-[#3E2C2A] hover:border-[#C9A66B] rounded-[30px] transition"
          value={fontStyle}
          onChange={(e) => setFontStyle(e.target.value)}
        >
          <option value="">Font Style</option>
          <option value="Serif Classic">Serif</option>
          <option value="Handwritten Soft">Sans-Serif</option>
          <option value="Typewriter">Cursive</option>
          <option value="Minimal Sans">Cursive</option>
          <option value="Calligraphy Brush">Cursive</option>
        </select>

        <select
          className="p-2 focus:outline-none focus:ring-0 bg-[#D4AF87] border-[3px] border-[#8B5E3C] text-[#3E2C2A] hover:border-[#C9A66B] rounded-[30px] transition"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
        >
          <option value="">Background color</option>
          <option value="Beige">Beige</option>
          <option value="Pink">Pink</option>
          <option value="Lavender">Lavender</option>
        </select>

        <select
          className="p-2 focus:outline-none focus:ring-0 bg-[#D4AF87] border-[3px] border-[#8B5E3C] text-[#3E2C2A] hover:border-[#C9A66B] rounded-[30px] transition"
          value={shape}
          onChange={(e) => setShape(e.target.value)}
        >
          <option value="">Shape</option>
          <option value="Square">Square</option>
          <option value="Circle">Circle</option>
          <option value="Rounded Rectangle">Rounded Rectangle</option>
        </select>

        <select
          className="p-2 focus:outline-none focus:ring-0 bg-[#D4AF87] border-[3px] border-[#8B5E3C] text-[#3E2C2A] hover:border-[#C9A66B] rounded-[30px] transition"
          value={stylePreset}
          onChange={(e) => setStylePreset(e.target.value)}
        >
          <option value="">Inbuilt styles</option>
          <option value="Minimalistic">Minimalistic</option>
          <option value="Vintage">Vintage</option>
          <option value="Modern">Modern</option>
        </select>
        </div>
  
        {error && (
          <p className="text-red-600 font-medium">{error}</p>
        )}
  
        <div className="relative w-full max-w-2xl h-32 flex items-start justify-start  text-left p-4 bg-[#DAC29A] border-[3px] border-[#8B5E3C] hover:border-[#C9A66B] mt-4">
          <div className="flex items-start justify-start h-full">
            {sticker ? (
              <p>{sticker}</p>
            ) : (
              <p className={`${mc.className} text-[#5c423a] text-[15px]`}>Your sticker:</p>
            )}
          </div>
  
          {/* Conditional Button */}
          {!isGenerated ? (
            <button
              onClick={handleGenerateSticker}
              className="absolute bottom-2 right-2 px-6 py-1.5 ml-6 bg-[#D4AF87] border-[3px] border-[#8B5E3C] hover:border-[#C9A66B] rounded-[30px] transition"
            >
              Generate sticker
            </button>
          ) : (
            <button
              onClick={handleSaveSticker}
              className="absolute bottom-2 right-2 px-6 py-1.5 ml-6 bg-[#D4AF87] border-[3px] border-[#8B5E3C] hover:border-[#C9A66B] rounded-[30px] transition"
            >
              Save
            </button>
          )}
        </div>
      </div>
      
    )
}


export default Textify
