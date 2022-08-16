import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './favoritos.css'


function Favoritos(){

    const[filmes,setFilms] = useState()
    const[load,setLoad] = useState(true)

    useEffect(()=>{
        const minhaLista=localStorage.getItem('@streemfilms')
        setFilms(JSON.parse(minhaLista)||[])
        setLoad(false)
    },[])

    if(load){
        return(
            <div>
                <h1>loading</h1>
            </div>
        )
    }

    return(
        <div className='meus-filmes'>
            <h1>Meus filmes</h1>

            <ul>
                {filmes.map((el,i)=>{
                    return(
                        <li key={el.id}>
                            <span>{el.title}</span>
                            <div>
                               <Link to={`/filme/${el.id}`}>Ver detalhes</Link>
                               <button className='excluir' >Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos