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
  has_many :article_musics, dependent: :destroy
  has_many :articles, through: :article_musics

  validates :title,      presence: true
  validates :sound_file, presence: true

  mount_uploader :sound_file,     SoundUploader
  mount_uploader :off_vocal_file, SoundUploader

  def as_json(option = {})
    super(
      except: [:sound_file, :off_vocal_file],
      methods: [:article_ids, :sound_file_url, :off_vocal_file_url]
    )
  end

  def sound_file_url
    sound_file.url
  end

  def off_vocal_file_url
    off_vocal_file.url
  end

end
