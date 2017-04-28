export const updateAdmin = (data) => {
  const { name, email, password, password_confirmation, current_password } = data
  return {
    admin: {
      name: name || '',
      email: email || '',
      password: password || '',
      password_confirmation: password_confirmation || '',
      current_password: current_password || ''
    }
  }
}

export const updateArticle = (data) => {
  const { title, description, status, categories, tags, published_date, published_time, work_ids } = data
  const params = {
    article: {
      title,
      description,
      status,
      category_list: categories,
      tag_list: tags
    }
  }
  const workIds = work_ids || {}
  if (published_date && published_time) {
    params.article.published_at = `${published_date}T${published_time}`
  }
  Object.assign(params.article, {
    music_ids: workIds.musics
  })
  return params
}

export const createArticle = (data) => updateArticle(data)
