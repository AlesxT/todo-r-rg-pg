Rails.application.routes.draw do
  root 'dashboard#index'
  #root 'layouts#application'
  resources :dashboard, only: [:index]
  #resources :projects, only: [:index]
  #resources :tasks, only: [:index]
  #end
  mount Client::API => '/api'

  devise_for :users
  #resources :projects
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html


end
