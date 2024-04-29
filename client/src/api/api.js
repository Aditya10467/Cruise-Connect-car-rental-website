import axios from 'axios'

const API = axios.create({
  baseURL: 'https://cruise-connect-car-rental-website.onrender.com',
})

export default API
