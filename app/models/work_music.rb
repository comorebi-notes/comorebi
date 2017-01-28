# == Schema Information
#
# Table name: work_musics
#
#  id         :integer          not null, primary key
#  work_id    :integer
#  music_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_work_musics_on_music_id              (music_id)
#  index_work_musics_on_work_id               (work_id)
#  index_work_musics_on_work_id_and_music_id  (work_id,music_id)
#
# Foreign Keys
#
#  fk_rails_36fec2eacf  (work_id => works.id)
#  fk_rails_923fc02782  (music_id => musics.id)
#

class WorkMusic < ApplicationRecord
  belongs_to :work
  belongs_to :music
end
