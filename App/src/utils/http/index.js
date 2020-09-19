import axios from 'axios'

const CSRFToken =
  Math.random()
    .toString(36)
    .slice(2) +
  Math.random()
    .toString(36)
    .slice(2)

const axiosInstance = axios.create({
  baseURL: [process.env.NODE_ENV],
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${CSRFToken}`,
  },
})

export default axiosInstance
