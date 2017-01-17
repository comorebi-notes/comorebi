FactoryGirl.define do
  factory :admin do
    name                  "testadmin"
    email                 "test@example.com"
    password              "P@ssw0rd"
    password_confirmation "P@ssw0rd"
  end
end
