require 'faker'

FactoryGirl.define do
  sequence :name        do Faker::Name.name end
  sequence :email       do Faker::Internet.email end
  sequence :title       do Faker::Book.title end
  sequence :description do Faker::Lorem.sentence(5) end
  sequence :time        do Faker::Time.backward(365) end
end
