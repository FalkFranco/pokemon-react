import { useState, useEffect } from 'react'
import useSelectPokemon from '../hooks/useSelectPokemon'
import styled from '@emotion/styled'

const Botones = styled.input`
  margin: 20px 0;
  width: 100%;
`

const Formulario = ({setPokemonBusqueda}) => {
    const [pokemones, setPokemones] = useState([])
    const [pokemon, SelectPokemon] = useSelectPokemon('Elije el Pokemon', pokemones)

    useEffect(() => {
      const consultarAPI =async ()=>{
        const url = "https://pokeapi.co/api/v2/pokemon"
        const respuesta = await fetch(url);
        const resultado = await respuesta.json()
        
        // console.log(respuesta)
        const arrayPokemon = resultado.results.map(pokemon =>{
          const objeto = {
            id: pokemon.name,
            url: pokemon.url
          }
            return objeto
        })
        setPokemones(arrayPokemon)
      }
      consultarAPI()
    }, [])
  
    const handleSubmit = (e)=>{
        e.preventDefault()
        setPokemonBusqueda({
            pokemon
        })
    }
     
  
    return (
      <>
        
        <form onSubmit={handleSubmit}>
          <SelectPokemon/>
          <Botones 
                    type="submit" 
                    value="Buscar" 
                    className='nes-btn is-success'
                />
        </form>
        
      </>
    )
}

export default Formulario