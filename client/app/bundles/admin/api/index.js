import axios from 'axios'

import * as admin from './admin'

axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
const config = {
  headers: {
    'X-CSRF-Token': document.querySelector('head [name=csrf-token]').content
  }
}

function getParams(params) {
  switch (params.target) {
  case 'admin':
    return admin.getParams(params)
  }
  return false
}

export const editAdminRequest = (target, data) => {
  const params = getParams({ target, data })
  return axios.put("/admin", params, config)
}
