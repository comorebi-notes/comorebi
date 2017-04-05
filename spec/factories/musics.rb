FactoryGirl.define do
  factory :music do
    title      { generate :title }
    lyrics     { generate :description }
    sound_file "..."
  end
end
