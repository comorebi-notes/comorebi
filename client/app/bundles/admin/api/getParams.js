export const getParams = (data, type) => {
  switch (type) {
  case "editAdmin": {
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
  case "editWork": {
    const { title, description, status, categories, tags, published_date, published_time, item_ids } = data
    return {
      work: {
        title,
        description,
        status,
        category_list: categories,
        tag_list:      tags,
        published_at:  `${published_date}T${published_time}`,
        music_ids:     item_ids.musics
      }
    }
  }
  }
  return {}
}

export default getParams
