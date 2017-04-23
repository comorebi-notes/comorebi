import axios from 'axios'

import * as getParams from './getParams'

axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
const config = {
  headers: {
    'X-CSRF-Token': document.querySelector('head [name=csrf-token]').content
  }
}

export const getAllWorks = () => axios.get("/admin/works", {}, config)

export const updateAdminRequest = (data) => {
  const params = getParams.updateAdmin(data)
  return axios.put("/admin", params, config)
}

export const updateWorkRequest = (data, id) => {
  const params = getParams.updateWork(data)
  return axios.put(`/admin/works/${id}`, params, config)
}

export const createWorkRequest = (data) => {
  const params = getParams.createWork(data)
  return axios.post(`/admin/works`, params, config)
}
