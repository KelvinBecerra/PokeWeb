import { useState } from "react"
const pokemones = "https://pokeapi.co/api/v2/pokemon?limit=10"
const pokemonesIds = "https://pokeapi.co/api/v2/pokemon/"
export const getPokemon = async (pokemones, setName) => {

    try {
        const response = await fetch(pokemones)//fetch se utiliza para obtener los valores de la url
        const data = await response.json()//de esta manera se convierte el valor de la url en un objeto
        //data es un objeto que contiene un array de objetos
        //para acceder a los valores de la url se utiliza data.results


        for (let pk of data.results) {
            if (data.results && data.results.length > 0) {
                setName(data.results[0].name)
                console.log(data.results[0].name); // Accede al primer Pokémon
            }
        }

    } catch (error) {
        {
            console.log("El error es: " + error)
        }
    }
}
