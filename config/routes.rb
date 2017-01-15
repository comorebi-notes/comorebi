Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin/rails_admin', as: 'rails_admin'
  root to: 'top#index'

  devise_for :admins, path: :admin, path_names: { sign_in: 'login', sign_out: 'logout' }

  resource :admin, only: [:show]
  namespace :admin do
  end
end
