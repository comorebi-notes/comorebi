import axios from 'axios'

import * as getParams from './getParams'

axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
const config = {
  headers: {
    'X-CSRF-Token': document.querySelector('head [name=csrf-token]').content
  }
}

// ============================================= GET
export const getAllWorks = (target) => axios.get(`/admin/${target}s`,  {}, config)

// ============================================= UPDATE
export const updateAdminRequest = (data) => {
  const params = getParams.updateAdmin(data)
  return axios.put("/admin", params, config)
}

export const updateWorkRequest = (target, data, id) => {
  const params = getParams.updateWork[target](data)
  return axios.put(`/admin/${target}s/${id}`, params, config)
}

// ============================================= CREATE
export const createWorkRequest = (target, data) => {
  const params = getParams.createWork[target](data)
  return axios.post(`/admin/${target}s`, params, config)
}

// ============================================= DESTROY
export const destroyWorkRequest = (target, id) => (
  axios.delete(`/admin/${target}s/${id}`, config)
)
