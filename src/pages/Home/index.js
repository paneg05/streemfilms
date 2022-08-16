import './home.css'


import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import api from '../../services/api'



function Home(){

    const [filmes, setFilmes]=useState()
    const[loading,setLoading]=useState(true)

    useEffect(()=>{

        async function loadFilmes(){
 
            const response = await api.get("/movie/now_playing",{
                params:{
                    api_key:'002208c53c04490b2efe64ff7edc9f1f',
                    language:'pt-BR',
                    page:1,
                }
                 
            }).then(response=>{
                setFilmes(response.data.results.slice(0,10))
                setLoading(false)
            })

  
        }
        loadFilmes()
    },[])

    if(loading){
        return (
            <div className='carregando'>
                <h2>Carregando...</h2>
            </div>
        )
    }


    return(
        <div className='container'>
            <div className='lista-filmes'>
                {
                    filmes.map((el,i)=>{
                        return(
                            <article key={el.id}>
                                <strong>{el.title}</strong>
                                <img src={`https://image.tmdb.org/t/p/original/${el.poster_path}`} alt={el.title}></img>
                                <Link to={`/filme/${el.id}`}>Acessar</Link>
                            </article>
                        ) 
                        
                    })
                    
                }
            </div>
        </div>
    )
}

export default Home