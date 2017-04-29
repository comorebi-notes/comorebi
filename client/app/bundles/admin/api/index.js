import axios from 'axios'

import * as getParams from './getParams'

axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
const config = {
  headers: {
    'X-CSRF-Token': document.querySelector('head [name=csrf-token]').content
  }
}

// ============================================= GET
export const getAllArticles  = () => axios.get("/admin/articles",  {}, config)
export const getAllMusics = () => axios.get("/admin/musics", {}, config)

// ============================================= UPDATE
export const updateAdminRequest = (data) => {
  const params = getParams.updateAdmin(data)
  return axios.put("/admin", params, config)
}

export const updateArticleRequest = (data, id) => {
  const params = getParams.updateArticle(data)
  return axios.put(`/admin/articles/${id}`, params, config)
}

export const updateMusicRequest = (data, id) => {
  const params = getParams.updateMusic(data)
  return axios.put(`/admin/musics/${id}`, params, config)
}

// ============================================= CREATE
export const createArticleRequest = (data) => {
  const params = getParams.createArticle(data)
  return axios.post("/admin/articles", params, config)
}

export const createMusicRequest = (data) => {
  const params = getParams.createMusic(data)
  return axios.post("/admin/musics", params, config)
}

// ============================================= DESTROY

export const destroyArticleRequest = (id) => (
  axios.delete(`/admin/articles/${id}`, config)
)

export const destroyMusicRequest = (id) => (
  axios.delete(`/admin/musics/${id}`, config)
)
