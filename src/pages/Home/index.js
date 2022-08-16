import { useEffect, useState } from 'react'
import api from '../../services/api'


function Home(){

    const [filmes, setFilmes]=useState()

    useEffect(()=>{
        async function loadFilmes(){
            const response = await api.get("/movie/now_playing",{
                params:{
                    api_key:'002208c53c04490b2efe64ff7edc9f1f',
                    language:'pt-BR',
                    page:1,
                }
                 
            })

            setFilmes(response.data.results.slice(0,10))
        }
        loadFilmes()
    },[])



    return(
        <div className='container'>
            <div className='lista-filmes'>
                {
                    filmes.map((el,i)=>{
                        return(
                            <article key={el.id}><strong>{el.title}</strong></article>
                        )
                        
                    })
                    
                }
            </div>
        </div>
    )
}

export default Home