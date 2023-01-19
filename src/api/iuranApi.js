import axios from 'axios'

export const iuranApi = axios.create({
  baseURL: "https://iuran.jasanya.tech/api/",
})