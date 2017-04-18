export function getParams(params) {
  const { title, description, status, categories, tags, published_date, published_time, item_ids } = params
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
