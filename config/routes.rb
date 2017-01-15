Rails.application.routes.draw do
  root to: 'top#index'

  devise_for :admins, path: :admin, path_names: { sign_in: 'login', sign_out: 'logout' }

  resource :admin, only: [:show]
  namespace :admin do
  end
end
