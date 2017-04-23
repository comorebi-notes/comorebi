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

export const updateWork = (data) => {
  const { title, description, status, categories, tags, published_date, published_time, item_ids } = data
  const params = {
    work: {
      title,
      description,
      status,
      category_list: categories,
      tag_list: tags
    }
  }
  const itemIds = item_ids || {}
  if (published_date && published_time) {
    params.work.published_at = `${published_date}T${published_time}`
  }
  Object.assign(params.work, {
    music_ids: itemIds.musics
  })
  return params
}

export const createWork = (data) => updateWork(data)
