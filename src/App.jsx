import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'

const Main = styled.main`
  margin: 140px 0;

`

const Contenedor = styled.div`
  max-width: 950px;
  margin: 0 auto;
  width: 90%;
`
function App() {

  const [pokemonBusqueda, setPokemonBusqueda] = useState({})
  const [resultado , setResultado] = useState({})

  useEffect(() => {
    if(Object.keys(pokemonBusqueda).length > 0){
        const consultarPokemon = async ()=>{
          const url = pokemonBusqueda.pokemon
          const respuesta = await fetch(url)
          const resultado = await respuesta.json()
          setResultado(resultado)
        }
        consultarPokemon()
      }
  }, [pokemonBusqueda])
  
  return (
    <Main>
      <Contenedor className='nes-container with-title is-centered '>
        <h1 className='title'>Pokemon Ginger/Code</h1>
        <Formulario
          setPokemonBusqueda ={setPokemonBusqueda}
        />
       {resultado.name && <Resultado resultado = {resultado}/>}
      </Contenedor>
    </Main>
  )
}

export default App
