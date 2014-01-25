class UserChore < ActiveRecord::Base
  attr_accessible :chore_id, :date, :user_id
end
