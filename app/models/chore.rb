class Chore < ActiveRecord::Base
  attr_accessible :name, :description, :frequency
  has_many :user_chores

  DAY_OFFSETS = {
    'MON' => 0,
    'TUE' => 1,
    'WED' => 2,
    'THU' => 3,
    'FRI' => 4,
    'SAT' => 5,
    'SUN' => 6
  }

  def generate_user_chores weeks
    next_monday = Date.today.next_week
    days = self.frequency.split(',')
    chores = []
    (1..weeks).each do |week_index|
      days.each do |day|
       chores << self.user_chores.build(:date => next_monday + DAY_OFFSETS[day])
      end
    end

    self.user_chores << chores

    next_monday = next_monday.next_week
  end
end
