class Music < ApplicationRecord
  has_many :work_musics
  has_many :works, through: :work_musics
end
