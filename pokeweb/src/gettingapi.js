import { useState } from "react"
import Cartas from "./Componentes/cartas"
export const getPokemon = async (url, setName,setHabilidad1,setHabilidad2,setExp) => {

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${url}`)//fetch se utiliza para obtener los valores de la url
        const data = await response.json()//de esta manera se convierte el valor de la url en un objeto
        //data es un objeto que contiene un array de objetos
        //para acceder a los valores de la url se utiliza data.results
        setName(data.name)
        setHabilidad1(data.abilities[0].ability.name)
        setHabilidad2(data.abilities[1].ability.name)
       setExp(data.base_experience)

    } catch (error) {
        {
            console.log("El error es: " + error)
        }
    }
}
export const mostrar=async(url)=>{
    const response=await fetch(url)
    const data= await response.json()
    console.log(data)
}
//esta funcion muestra la cantidad de pokemos que quiere el usuario
 