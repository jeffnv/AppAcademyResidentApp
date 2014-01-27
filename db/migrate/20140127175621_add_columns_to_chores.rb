class AddColumnsToChores < ActiveRecord::Migration
  def change
    add_column :chores, :description, :text
    add_column :chores, :frequency, :string
  end
end
