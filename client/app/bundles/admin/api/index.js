import axios from 'axios'

import * as admin from './admin'

axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
const config = {
  headers: {
    'X-CSRF-Token': document.querySelector('head [name=csrf-token]').content
  }
}

export const getAllWorks = () => (
  axios.get("/admin/works", {}, config)
)

export const editAdminRequest = (data) => {
  const params = admin.getParams(data)
  return axios.put("/admin", params, config)
}
