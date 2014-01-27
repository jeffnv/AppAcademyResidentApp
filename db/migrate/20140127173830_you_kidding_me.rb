class YouKiddingMe < ActiveRecord::Migration
  def change
    change_column :user_chores, :user_id, :integer, :null => true
  end
end
