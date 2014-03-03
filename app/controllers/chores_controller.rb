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
    @chore = Chore.new(params[:chore])
    if !@chore.save
      flash.now = @chore.errors.full_messages
    end
    @chores = Chore.all
    render :json => @chore
  end
end
