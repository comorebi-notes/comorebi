import axios from 'axios'

import * as getParams from './getParams'

axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
const config = {
  headers: {
    'X-CSRF-Token': document.querySelector('head [name=csrf-token]').content
  }
}

export const getAllWorks = () => axios.get("/admin/works", {}, config)

export const editAdminRequest = (data) => {
  const params = getParams.editAdmin(data)
  return axios.put("/admin", params, config)
}

export const editWorkRequest = (data, id) => {
  const params = getParams.editWork(data)
  return axios.put(`/admin/works/${id}`, params, config)
}
