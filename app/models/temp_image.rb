# == Schema Information
#
# Table name: temp_images
#
#  id         :integer          not null, primary key
#  file       :string(255)      not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class TempImage < ApplicationRecord
  mount_uploader :file, ImageUploader
  skip_callback :commit, :after, :remove_file!
end
