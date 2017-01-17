Rails.application.routes.draw do
  mount RailsAdmin::Engine => "/rails_admin", as: "rails_admin"
  devise_for :admins, path: :admin, path_names: {
    sign_in:  "login",
    sign_out: "logout"
  }, controllers: {
    sessions:      "admins/sessions",
    registrations: "admins/registrations",
    passwords:     "admins/passwords"
  }

  root to: "top#index"

  resource :admin, only: [:index]
  namespace :admin do
  end
end
