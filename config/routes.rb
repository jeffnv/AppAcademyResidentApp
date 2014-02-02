AppResidentApp::Application.routes.draw do


  get "static_pages/root"

  get "static_pages/admin"

  resources :user_chores
  post "user_chores/assign_group", to:  "user_chores#assign_group"
  resources :users, :only => [:create, :new, :show, :index]
  resource :session, :only => [:create, :destroy, :new]
  resources :chores

  root :to => "static_pages#root"
end
