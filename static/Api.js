import axios from 'axios'
export const HTTP = axios.create({
  baseURL: 'https://fire-linh-default-rtdb.firebaseio.com/'
})
