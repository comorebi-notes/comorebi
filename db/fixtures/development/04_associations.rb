ArticleMusic.seed(:id,
  {
    id: 1,
    article: Article.find_by(id: 1),
    music: Music.find_by(id: 1)
  },
  {
    id: 2,
    article: Article.find_by(id: 2),
    music: Music.find_by(id: 2)
  },
  {
    id: 3,
    article: Article.find_by(id: 3),
    music: Music.find_by(id: 3)
  }
)
