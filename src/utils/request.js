/* eslint-disable no-console */
import axios from 'axios'
import store from '../store'

const service = axios.create({
  baseURL: `${process.env.VUE_APP_BASE_URL}`
})

service.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'application/json'
  config.headers['Access-Control-Allow-Origin'] = '*'
  config.headers['Accept'] = 'application/json'
  config.headers.authorization = `Bearer ${store.state.auth.token}`
  return config
}, e => {
  return Promise.reject(e)
})

service.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error);
})

export default service
