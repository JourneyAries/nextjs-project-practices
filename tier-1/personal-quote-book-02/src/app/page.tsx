// Last edited: 2025-08-14 04:24:47
'use client';

import React, { useState } from "react";

export default function Home() {
  type QuoteItem = {
    quote: string;
    author: string;
  }

  const [quote, setQuote] = useState<string>('')
  const [author, setAuthor] = useState<string>('')
  const [quotesList, setQuotesList] = useState<QuoteItem[]>([])
  const [indexEdit, setIndexEdit] = useState<number | null>(null)
  
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newQuote = {quote, author};
    
    if (indexEdit !== null) {
     // edit item 
    const updatedList = [...quotesList];
    updatedList[indexEdit] = newQuote;
    setQuotesList(updatedList);
    setIndexEdit(null);
    }else{
      setQuotesList([...quotesList, newQuote]);
    }

    //create new object
    setQuote('');
    setAuthor('');
    
  }
  
  const handleDelete = (indexToDelete:number) => {
    setQuotesList(quotesList.filter((_,index) => index !== indexToDelete))
  }

  const handleEdit = (indexToEdit:number) => {
    const item = quotesList[indexToEdit];
    setQuote(item.quote);
    setAuthor(item.author);
    setIndexEdit(indexToEdit);
  }

  return (
    //container
    <div className='h-screen flex items-center justify-center bg-indigo-400 [&>*]:select-none'>
      <main className='w-[640px] rounded-lg p-8 bg-white flex flex-col gap-y-5 shadow-sm'>
        <h1 className='text-4xl font-semibold text-slate-900'>Personal Quote Book</h1>
        {/* form */}
        <form onSubmit={handleSubmit} className='flex flex-col gap-y-3'>
          <fieldset className='flex flex-col gap-y-1'>
            <label htmlFor='quote' className='font-medium text-slate-700'>
              Quote
            </label>
            <input
              id='quote'
              type='text'
              className='rounded-sm border border-slate-300 p-2 text-slate-900 placeholder-slate-600'
              placeholder='no pain no gain'
              value={quote}
              onChange={(e) => setQuote(e.target.value)}
            />
          </fieldset>
          <fieldset className='flex flex-col gap-y-1'>
            <label htmlFor='quote' className='font-medium text-slate-700'>
              Author
            </label>
            <input
              id='author'
              type='text'
              className='rounded-sm border border-slate-300 p-2 text-slate-900 placeholder-slate-600'
              placeholder='nobody'
              value={author}
              onChange={(e)=>setAuthor(e.target.value)}
            />
          </fieldset>
          <button
            type='submit'
            className='cursor-pointer w-fit px-2 py-1 bg-indigo-700 text-white font-bold rounded'>
            Submit
          </button>
        </form>
        {/* quoteslist */}
        {quotesList.map((item, index) => (
          <div key={index} className='flex flex-col gap-y-5 border-b border-b-slate-200 last:border-b-0'>
            <div className='flex flex-col gap-y-2 pb-3'>
              <h2 className='text-xl font-medium text-slate-900'>
              {item.quote}
              </h2>
              <div className='flex justify-between items-center'>
                <h3 className='text-slate-600'>{item.author}</h3>
                <span className='flex gap-x-2'>
                <button
                  onClick={()=>handleDelete(index)}
                  type='button'
                  className='cursor-pointer rounded-sm py-1 px-2 text-slate-700 font-medium bg-slate-200'>
                  Delete
                </button>
                  <button
                    onClick={()=>handleEdit(index)}
                    type='button'
                    className='cursor-pointer rounded-sm py-1 px-2 text-slate-700 font-medium bg-slate-200'>
                    Edit
                </button>
                </span>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
