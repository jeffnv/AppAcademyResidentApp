AppResidentApp::Application.routes.draw do

  get "static_pages/root"

  get "static_pages/admin"

  resources :users, :only => [:create, :new, :show]
  resource :session, :only => [:create, :destroy, :new]
  resources :chores

  root :to => "static_pages#root"
end
