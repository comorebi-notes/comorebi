# == Schema Information
#
# Table name: article_musics
#
#  id         :integer          not null, primary key
#  article_id :integer
#  music_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_article_musics_on_article_id               (article_id)
#  index_article_musics_on_article_id_and_music_id  (article_id,music_id)
#  index_article_musics_on_music_id                 (music_id)
#
# Foreign Keys
#
#  fk_rails_48932c43d4  (article_id => articles.id)
#  fk_rails_9a2a463094  (music_id => musics.id)
#

class ArticleMusic < ApplicationRecord
  belongs_to :article
  belongs_to :music
end
