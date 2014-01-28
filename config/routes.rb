AppResidentApp::Application.routes.draw do

  get "user_chores/index"

  get "user_chores/show"

  get "static_pages/root"

  get "static_pages/admin"

  resources :users, :only => [:create, :new, :show, :index]
  resource :session, :only => [:create, :destroy, :new]
  resources :chores

  root :to => "static_pages#root"
end
