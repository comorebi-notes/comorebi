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

const getFileId = (file) => {
  if (!file || (file.url && file.id === "")) return false // 変更なし
  if (!file.url) return 0 // ファイル削除
  return file.id
}

export const updateWork = {
  article: (data) => {
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
  },
  music: (data) => {
    const { title, lyrics, sound_file, off_vocal_file } = data
    const params = { music: { title, lyrics } }
    if (getFileId(sound_file) !== false)     params.music.sound_file_id     = getFileId(sound_file)
    if (getFileId(off_vocal_file) !== false) params.music.off_vocal_file_id = getFileId(off_vocal_file)
    return params
  }
}

export const createWork = updateWork
