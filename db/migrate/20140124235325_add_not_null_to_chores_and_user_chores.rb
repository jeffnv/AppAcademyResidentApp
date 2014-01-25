class AddNotNullToChoresAndUserChores < ActiveRecord::Migration
  def change
    change_column :chores, :name, :string, :null => false
    change_column :user_chores, :user_id, :integer, :null => false
    change_column :user_chores, :chore_id, :integer,:null => false
    change_column :user_chores, :date, :date, :null => false
  end
end
