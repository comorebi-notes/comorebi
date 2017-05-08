include ActionDispatch::TestProcess

FactoryGirl.define do
  factory :temp_sound do
    file { fixture_file_upload("spec/fixtures/sound_file/sample.mp3", "audio/mp3") }
  end
end
