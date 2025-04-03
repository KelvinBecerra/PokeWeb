import React from 'react'

function Cartas({name,habilidad,habilidad2,exp}) {
  return (
    <>
      <div>
        <ul>
            <li>Nombre:{name}</li>
          
            <ul>Habilidades:
            <li>{habilidad}</li>
            <li>{habilidad2}</li>
            </ul>
            <li>Experiencia:{exp} </li>
           
        </ul>

      </div>
    </>
  )
}

export default Cartas
