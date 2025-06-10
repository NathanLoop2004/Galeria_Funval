import React, { useState } from 'react'

export default function Nav_Bar({ onSearch }) {

   const [input, setInput]  = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if(onSearch) onSearch(input)
  }


  return (
    <nav className="flex items-center justify-between bg-white px-8 py-4 flex-col">
      <div className="text-2xl font-bold text-blue-700 text-[40px]">Photo Shearch</div>
      <form className="flex items-center mt-5" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar..."
          value={input}
          onChange={e => setInput(e.target.value)}
          className="shadow-md rounded-l px-4 md:w-[700px] py-2 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 shadow-md text-white px-4 py-2.5 rounded-r flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4-4m0 0A7 7 0 104 4a7 7 0 0013 13z" />
          </svg>
        </button>
      </form>
    </nav>
  )
}
