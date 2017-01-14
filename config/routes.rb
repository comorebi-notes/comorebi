Rails.application.routes.draw do
  devise_for :admins
  get 'top/index'

  root to: 'top#index'
  resources :admins do
    root to: 'admins#index'
  end
end
