Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/rails_admin', as: 'rails_admin'
  devise_for :admins, path: :admin, path_names: { sign_in: 'login', sign_out: 'logout' }

  root to: 'top#index'

  resource :admin, only: [:show]
  namespace :admin do
  end
end
