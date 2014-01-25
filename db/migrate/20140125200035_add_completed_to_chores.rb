class AddCompletedToChores < ActiveRecord::Migration
  def change
    add_column :chores, :completed, :boolean, :null => false, :default => false
  end
end
