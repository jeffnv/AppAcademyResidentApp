class RemoveDoneFromChoresAddToUserChores < ActiveRecord::Migration
  def change
    add_column :user_chores, :complete, :boolean, :null => false, :default => false
    remove_column :chores, :completed
  end
end
