class AddColumnsToUser < ActiveRecord::Migration
  def change
		add_column :users, :cohort_id, :integer
		add_column :users, :moved_in, :datetime
		add_index :users, :cohort_id
  end
end
