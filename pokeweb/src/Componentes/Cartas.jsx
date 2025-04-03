import React from 'react'

function Cartas({name}) {
  return (
    <>
      <div>
        <ul>
            <li>Nombre:{name}</li>
          
            <ul>Habilidades:
            <li>habilidad1</li>
            <li>habilidad2</li>
            </ul>
            <li>Experiencia:experiencia </li>
           
        </ul>

      </div>
    </>
  )
}

export default Cartas
