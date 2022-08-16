import axios from 'axios'

//URL  = /movie/now_playing?api_key=002208c53c04490b2efe64ff7edc9f1f&language=pt-BR

const api=axios.create({
    baseURL:'https://api.themoviedb.org/3/'
})







export default api