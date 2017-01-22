class Work < ApplicationRecord
  has_many :work_musics
  has_many :musics, through: :work_musics
  acts_as_taggable

  enum category: {
    others: 0,
    vocaloid: 1, songs: 2, instrumental: 3, album: 4,
    illustration: 11, rough: 12, comic: 13,
    mv: 21, movie: 22,
    website: 31
  }
  enum status: { draft: 0, published: 1, deleted: 2 }
end
