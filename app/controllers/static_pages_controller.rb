class StaticPagesController < ApplicationController
  before_filter :require_current_user!
  def root
  end

  def admin
  end
end
