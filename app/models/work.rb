# == Schema Information
#
# Table name: works
#
#  id          :integer          not null, primary key
#  title       :string(255)      not null
#  description :text(65535)
#  category    :integer          default("others"), not null
#  status      :integer          default("drafted"), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Indexes
#
#  index_works_on_category_and_status  (category,status)
#

class Work < ApplicationRecord
  has_many :work_musics, dependent: :destroy
  has_many :musics, through: :work_musics
  acts_as_taggable_on :tags

  enum category: {
    others: 0,
    vocaloid: 1, song: 2, instrumental: 3, album: 4,
    illustration: 11, rough: 12, comic: 13,
    mv: 21, movie: 22,
    website: 31
  }
  enum status: { drafted: 0, published: 1, deleted: 2 }

  validates :title, presence: true
end
