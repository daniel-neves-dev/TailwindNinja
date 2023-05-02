Rails.application.routes.draw do
  root 'pages#index'
  get '/home', to: 'pages#home'
  get '/about', to: 'pages#about'
end
