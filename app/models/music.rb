# == Schema Information
#
# Table name: musics
#
#  id             :integer          not null, primary key
#  title          :string(255)      not null
#  lyrics         :text(65535)
#  sound_file     :string(255)      not null
#  off_vocal_file :string(255)
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Music < ApplicationRecord
  has_many :work_musics, dependent: :destroy
  has_many :works, through: :work_musics

  validates :title, presence: true
  validates :sound_file, presence: true
end
