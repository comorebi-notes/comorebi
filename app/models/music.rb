class Music < ApplicationRecord
  has_many :work_musics, dependent: :destroy
  has_many :works, through: :work_musics
end
