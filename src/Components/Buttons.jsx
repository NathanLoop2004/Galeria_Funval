import React from 'react'

export default function Buttons() {
  return (
    <div className="flex gap-4 mx-auto mt-2 mb-5 ml-4 md:ml-125">
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 md:px-8 py-2 rounded shadow">Montain</button>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 md:px-8 py-2 rounded shadow">Beaches</button>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 md:px-8 py-2 rounded shadow">Birds</button>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 md:px-8 py-2 rounded shadow">Food</button>
    </div>
  )
}
