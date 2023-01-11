import { BASE_URL, TIME_OUT } from '@/config/index'
import Request from './http/index'

const Http = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      return config
    }
  }
})

export default Http
