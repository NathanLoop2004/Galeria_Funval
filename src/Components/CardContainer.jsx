import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function CardContainer({search}) {
   const [photos, setPhotos] = useState([])



   useEffect(() => {
      axios.get('https://api.pexels.com/v1/search', {
      params: { query: search, per_page: 20 }, 
      headers: {
        Authorization: 'C0gxMQQjUNLeBVDtB95msi4GujtDhsoCYbtoGzWEhEiwc0rjmOjjur6y'
      }
    })
    .then(res => setPhotos(res.data.photos))
    .catch(err => console.error(err))
   }, [search])

  return (
    <div className='grid md:grid-cols-4 gap-y-4 mx-10 '>
      {photos.map(photo => (
        <img className='w-[250px] h-[300px]'
         key={photo.id} src={photo.src.medium} alt={photo.photographer} />
      ))}
    </div>
  )
}
