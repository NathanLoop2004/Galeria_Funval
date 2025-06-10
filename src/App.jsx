import CardContainer from './Components/CardContainer'
import './App.css'
import Nav_Bar from './Components/Nav_Bar'
import Buttons from './Components/Buttons'
import { useState } from 'react'
// "C0gxMQQjUNLeBVDtB95msi4GujtDhsoCYbtoGzWEhEiwc0rjmOjjur6y" Esta es la ApiKey
function App() {
   const [searchInput, setSearchInput] = useState('Mormon')
  return (
    <>
    <Nav_Bar onSearch={setSearchInput}/>
    <Buttons />
    <CardContainer search={searchInput}/>

    </>
  )
}

export default App
