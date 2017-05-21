Article.seed(:id,
  { id: 1, title: "comorebi", description: "test1", category_list: [:music, :vocaloid],     status: :published, published_at: DateTime.new(2015,  4, 11, 20, 30) },
  { id: 2, title: "paellero", description: "test2", category_list: [:music, :song],         status: :published, published_at: DateTime.new(2015, 10, 17, 20,  8) },
  { id: 3, title: "夜鷹様",   description: "test3", category_list: [:music, :instrumental], status: :closed,    published_at: DateTime.new(2011, 10, 18,  0,  0) }
)
