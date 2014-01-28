class AddNameToUsers < ActiveRecord::Migration
  def change
    add_column :users, :name, :string
    add_column :users, :current_resident, :boolean, :default => false, :null => false
  end
end
