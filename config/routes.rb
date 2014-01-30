AppResidentApp::Application.routes.draw do


  get "static_pages/root"

  get "static_pages/admin"

  resources :user_chores
  resources :users, :only => [:create, :new, :show, :index]
  resource :session, :only => [:create, :destroy, :new]
  resources :chores

  root :to => "static_pages#root"
end
