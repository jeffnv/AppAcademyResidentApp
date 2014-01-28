class Chore < ActiveRecord::Base
  attr_accessible :name, :description, :frequency
end
