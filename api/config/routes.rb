Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace 'api', format: 'json' do
    resources :guest_reservations, only: [:create]
  end
end
