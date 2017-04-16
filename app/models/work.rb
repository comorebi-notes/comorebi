# == Schema Information
#
# Table name: works
#
#  id           :integer          not null, primary key
#  title        :string(255)      not null
#  description  :text(65535)
#  status       :integer          default("drafted"), not null
#  published_at :datetime         not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Work < ApplicationRecord
  has_many :work_musics, dependent: :destroy
  has_many :musics, through: :work_musics

  acts_as_taggable_on :categories, :tags
  enum status: { drafted: 0, published: 1, deleted: 2 }

  validates :title, presence: true
end
