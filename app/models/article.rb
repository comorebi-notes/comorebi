# == Schema Information
#
# Table name: articles
#
#  id           :integer          not null, primary key
#  title        :string(255)      not null
#  description  :text(65535)
#  status       :integer          default("drafted"), not null
#  published_at :datetime         not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Article < ApplicationRecord
  has_many :article_musics, dependent: :destroy
  has_many :musics, through: :article_musics

  acts_as_taggable_on :categories, :tags
  enum status: { drafted: 0, published: 1, deleted: 2 }

  validates :title,        presence: true
  validates :description,  presence: true
  validates :published_at, presence: true

  def with_children
    self.attributes.merge(
      music_ids:  music_ids,
      categories: category_list,
      tags:       tag_list
    )
  end
end
