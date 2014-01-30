class UserChoresController < ApplicationController
  def index
    @user_chores = UserChore.includes(:user, :chore)
  end

  def show
  end

  def create
    @user_chore = UserChore.new(params[:user_chore])

    unless @user_chore.save
      flash.now = @user_chore.errors.full_messages
    end

    redirect_to chore_url @user_chore.chore
  end
end
