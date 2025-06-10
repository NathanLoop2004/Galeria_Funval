

export default function Buttons({onButtonSearch}) {
  
   

      const handleClick = (e) =>{
        if(onButtonSearch) onButtonSearch(e.target.textContent)
      }

  return (
    <div className="flex gap-4 mx-auto mt-2 mb-5 ml-4 md:ml-125">

      <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 md:px-8 py-2 rounded shadow"  onClick={handleClick}>Montain</button>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 md:px-8 py-2 rounded shadow"  onClick={handleClick}>Beaches</button>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 md:px-8 py-2 rounded shadow"  onClick={handleClick}>Birds</button>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 md:px-8 py-2 rounded shadow"  onClick={handleClick}>Food</button>
        
    </div>
  )
}
