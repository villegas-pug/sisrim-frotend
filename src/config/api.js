import axios from 'axios'
import { END_POINT } from 'constants/endpoint'

const api = axios.create({
   baseURL: END_POINT,
   headers: {
      'Content-Type': 'application/json'
   }
})

export default api