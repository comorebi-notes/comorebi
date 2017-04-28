require 'faker'

FactoryGirl.define do
  factory :article do
    title        { generate :title }
    description  { generate :description }
    status       :published
    published_at { generate :time }
  end
end
