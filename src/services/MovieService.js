import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://hybridtv.ss7.tv/techtest/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getMoviesDb() {
    return apiClient.get('/movies.json')
  },
  getSpecificMovie(index) {
    return apiClient.get('/movies.json' + index)
  }
}