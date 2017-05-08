include ActionDispatch::TestProcess

FactoryGirl.define do
  factory :music do
    title      { generate :title }
    lyrics     { generate :description }
    sound_file { fixture_file_upload("spec/fixtures/sound_file/sample.mp3", "audio/mp3") }
  end
end
