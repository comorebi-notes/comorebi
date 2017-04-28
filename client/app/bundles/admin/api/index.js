import axios from 'axios'

import * as getParams from './getParams'

axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
const config = {
  headers: {
    'X-CSRF-Token': document.querySelector('head [name=csrf-token]').content
  }
}

export const getAllArticles  = () => axios.get("/admin/articles",  {}, config)
export const getAllMusics = () => axios.get("/admin/musics", {}, config)

export const updateAdminRequest = (data) => {
  const params = getParams.updateAdmin(data)
  return axios.put("/admin", params, config)
}

export const updateArticleRequest = (data, id) => {
  const params = getParams.updateArticle(data)
  return axios.put(`/admin/articles/${id}`, params, config)
}

export const createArticleRequest = (data) => {
  const params = getParams.createArticle(data)
  return axios.post("/admin/articles", params, config)
}

export const destroyArticleRequest = (id) => (
  axios.delete(`/admin/articles/${id}`, config)
)
