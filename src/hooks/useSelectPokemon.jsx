import {useState} from 'react'
import styled from '@emotion/styled'
import "nes.css/css/nes.min.css";

const Label = styled.div`
    color: #000;
    display: block;
    font-size: 15px;
    font-weight: 700;
    margin: 15px 0;
    display: flex;
    justify-content: center;
    gap: 10px;
`

const Select = styled.select`
    span{
        text-transform: uppercase;
    }
    
`

const useSelectPokemon = (label, opciones) => {

    const [state, setState] = useState('');

  const selectPokemon = ()=>(
      <>  
        <Label>
            <div>
                <i className="nes-ash"></i>
            </div>
            <div className="nes-balloon from-left">
                <label>{label}</label>
            </div>
            
            
        </Label>
            
        

        <div className="nes-select">
            <Select
                value = {state}
                onChange={e => setState(e.target.value)}
            >
                <option value="">Select...</option>

                {opciones.map( opcion =>(
                    <option
                        key= {opcion.id}
                        value= {opcion.url}
                    ><span>{opcion.id}</span></option>
                    ))}
            </Select>
        </div>
      </>
  )
      
  return [state, selectPokemon]
}

export default useSelectPokemon