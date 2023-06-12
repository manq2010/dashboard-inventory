'use client'

const { useRouter } = require("next/navigation")
const { useState } = require("react")

import React from 'react';

export default function Search() {
  const [search, setSearch] = useState('')
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearch('')
    router.push(`search-wiki/${search}/`)
  }
  
    return (
    <div>
      <form className='w-50 flex justify-center my-6'
      onSubmit={handleSubmit}
      >
        <input 
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='border-2 border-rose-500 p-2 
        hover:border-slate-400 p-2 w-80 text-xl rounded-xl'
        placeholder='Search'
        />
        <button className=' text-xl rounded-xl bg-slate-300 ml-2 font-bold'>
        🚀
        </button>
      </form>
    </div>
  );
}
