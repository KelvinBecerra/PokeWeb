import { useState } from 'react'
import {getPokemon} from './gettingapi'
import './App.css'
import Cartas from './Componentes/cartas'
function App() {

const url="https://pokeapi.co/api/v2/pokemon"

const [name,setname]=useState('desconocido')
const [habilidades1,sethabilidades1]=useState('desconocido')
const [habilidades2,sethabilidades2]=useState('desconocido')
const [exp,setexp]=useState('desconocida')
const [numero,setnumero]=useState('')
const [cantidad,setCantidad]=useState(0)
const [componentes,setcomponentes]=useState([])
const mostrarvarios=async(numero)=>{
    try {
      const componentes=[]
  for (let n=1;n<=numero;n++){
      const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${n}`)
      const data=await response.json()
      componentes.push(<Cartas
          key={n}//se agrega porque cada componente debe ser unico, si no esta se genera un error
          name={data.name}
          habilidad={data.abilities[0].ability.name} 
          habilidad2={data.abilities[1].ability.name}
          exp={data.base_experience} />)
  }
  setcomponentes(componentes)

    } catch (error) {
      console.log("Error al mostrar los pokemones: "+error)
    }
  
}
const borrar=()=>{
  setcomponentes([])
  setname('desconocido')
  sethabilidades1('desconocido')
  sethabilidades2('desconocido')
  setexp('desconocida')
  setnumero('')
  setCantidad(0)
}
  return (

    

    <>

    
    <div className='contenedor'>
      <p>Borrar</p>
      <button onClick={borrar}>---</button>
      <p >Ingrese el numero de un pokemon especifico</p>

      <input
      value={numero}
      onChange={(e)=>setnumero(e.target.value)
       
      }
      type="number"
      min={1}
      max={6} />
       <button onClick={()=>getPokemon(numero,setname,sethabilidades1,sethabilidades2,setexp)}>Mostrar uno</button>
       <Cartas name={name} habilidad={habilidades1} habilidad2={habilidades2} exp={exp}/>

      
       <p>Ingresa el numero de pokemones a mostrar</p>
       <input 
       type="number"
        max={1} 
        min={6} 
        value={cantidad}
       onChange={(e)=>setCantidad(e.target.value)}/>
       <button  onClick={()=>mostrarvarios(cantidad)}
       >Mostrar varios</button>
       {componentes}
    </div>
   
    </>
  )
}

export default App
