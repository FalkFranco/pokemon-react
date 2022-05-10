import React from 'react'
import styled from '@emotion/styled'
import "nes.css/css/nes.min.css";


const ImagenPokemon = styled.img`
    display: block;
    width: 200px;
    margin: 0 auto;
`
const Nombre = styled.p`
    font-size: 25px;
    text-transform: capitalize;
`

const Info = styled.p`
    span{
        text-transform: capitalize;
    }
    
`



const Resultado = ({resultado}) => {
    const {name, sprites, types , weight} = resultado
    console.log(resultado)
    const imagen = sprites.front_default
    const type= types[0].type.name
  return (
    <div>
        <ImagenPokemon
            src={imagen}
            alt="Imagen Pokemon"
        />
        <Nombre>{name}</Nombre>
        <Info>Tipo: <span>{type}</span> </Info>
        <p>Peso: {weight} </p>
    </div>
  )
}

export default Resultado