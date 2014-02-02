class StaticPagesController < ApplicationController
  before_filter :require_current_user!
  def root
    @user_json = User.all.to_json(:only => [:id, :name])
  end

  def admin
  end
end
