class RemoveNullContstrainFromUserChores < ActiveRecord::Migration
  def change
    change_column :user_chores, :user_id, :integer
  end
end
