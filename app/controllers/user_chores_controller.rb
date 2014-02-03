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

  def assign_group
    @user_chores = UserChore.where(:id => params[:user_chore_ids])
    random_users = User.pluck(:id).sample(@user_chores.count)
    @user_chores.each_with_index do |chore, index|
      chore.user_id = random_users[index]
      chore.save
    end
    #NEED TO make this randomish, but fair. Should assign to deserving users.
    render :json => @user_chores

  end
end
