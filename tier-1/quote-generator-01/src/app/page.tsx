// Last edited: 2025-08-13 09:00:58
'use client';

import { useState } from 'react';

type Quote = {
  quote: string;
  author: string;
};

const quotes: Quote[] = [
  {
    quote: "Don't judge each day by the harvest you reap but by the seeds that you plant",
    author: 'Robert Louis Stevenson',
  },
  {
    quote: "Believe you can and you're halfway there",
    author: 'Theodore Roosevelt',
  },
];

export default function Home() {
  const [quote, setQuote] = useState<Quote>(quotes[0]);
  const [_tick, setTick] = useState<number>(0);

  const handleClick = () => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random);
    setTick((prev) => prev + 1);
  };

  return (
    // screen
    <div className='h-screen bg-indigo-400 flex items-center justify-center'>
      {/* card */}
      <main className='w-[640px] rounded-lg p-8 flex flex-col gap-y-5 bg-white shadow-md items-center'>
        {/* header */}
        <div className='flex w-full justify-between items-center'>
          <h1 className='text-lg font-bold text-slate-500'>Quote of the Day</h1>
          <button
            type='button'
            onClick={handleClick}
            className='rounded-sm py-1 px-2 bg-indigo-700 text-white hover:bg-indigo-800 cursor-pointer'>
            Get Another Quote
          </button>
          <input type='text' />
        </div>
        {/* quote */}
        <em className='text-2xl text-slate-900 w-full text-center'>{quote.quote}</em>
        {/* author */}
        <p className='font-semibold text-indigo-800'>{quote.author}</p>
      </main>
    </div>
  );
}
