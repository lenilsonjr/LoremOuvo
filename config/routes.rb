Rails.application.routes.draw do
  root to: 'home#index'
  get 'feed', to: 'home#feed'
end
