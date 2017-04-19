import axios from 'axios'

import getParams from './getParams'

axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
const config = {
  headers: {
    'X-CSRF-Token': document.querySelector('head [name=csrf-token]').content
  }
}

export const getAllWorks = () => axios.get("/admin/works", {}, config)

export const editAdminRequest = (data) => {
  const params = getParams(data, "editAdmin")
  return axios.put("/admin", params, config)
}

export const editWorkRequest = (data, id) => {
  const params = getParams(data, "editWork")
  return axios.put(`/admin/works/${id}`, params, config)
}
