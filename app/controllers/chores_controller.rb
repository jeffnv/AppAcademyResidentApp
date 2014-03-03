class ChoresController < ApplicationController
  before_filter :require_current_user!
  before_filter :require_admin!, :only => :create

  def index
    @chores = Chore.all
  end

  def show
    @chore = Chore.find(params[:id])
  end

  def new
  end

  def create
    puts "here come params*************"
    p params
    @chore = Chore.new(params[:chore])
    if !@chore.save
      render :json => @chore.errors.full_messages
    else
      render :json => @chore
    end
  end
end
