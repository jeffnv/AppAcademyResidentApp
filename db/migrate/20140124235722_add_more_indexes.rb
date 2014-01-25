class AddMoreIndexes < ActiveRecord::Migration
  def change
    add_index :user_chores, :user_id
    add_index :user_chores, :chore_id
  end
end
