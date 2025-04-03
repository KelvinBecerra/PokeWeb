import { useState } from 'react'
import {getPokemon} from './gettingapi'
import './App.css'
import Cartas from './Componentes/cartas'
function App() {

const url="https://pokeapi.co/api/v2/pokemon?limit=10"
const urls="https://pokeapi.co/api/v2/pokemon/"
const [name,setname]=useState('')
 
  return (
    

    <>

    
    <div className='contenedor'>
       <button onClick={()=>getPokemon(url,setname)}>Pokemones</button>
    <Cartas name={name}/>
    </div>
   
    </>
  )
}

export default App
