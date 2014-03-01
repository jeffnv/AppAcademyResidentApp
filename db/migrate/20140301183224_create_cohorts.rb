class CreateCohorts < ActiveRecord::Migration
  def change
    create_table :cohorts do |t|
      t.datetime :start_date
      t.string :name

      t.timestamps
    end
  end
end
