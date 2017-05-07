# == Schema Information
#
# Table name: temp_sounds
#
#  id         :integer          not null, primary key
#  file       :string(255)      not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class TempSound < ApplicationRecord
  mount_uploader :file, SoundUploader
  skip_callback :commit, :after, :remove_file!
end
