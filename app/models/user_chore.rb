class UserChore < ActiveRecord::Base
  attr_accessible :chore_id, :date, :user_id, :complete
  belongs_to :user
  belongs_to :chore
end
