import axios from 'axios'

import * as admin from './admin'
import * as work from './work'

axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
const config = {
  headers: {
    'X-CSRF-Token': document.querySelector('head [name=csrf-token]').content
  }
}

export const getAllWorks = () => axios.get("/admin/works", {}, config)

export const editAdminRequest = (data) => {
  const params = admin.getParams(data)
  return axios.put("/admin", params, config)
}

export const editWorkRequest = (data) => {
  const params = work.getParams(data)
  return axios.put(`/admin/works/${1}`, params, config)
}
