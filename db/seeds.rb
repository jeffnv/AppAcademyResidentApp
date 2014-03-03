ActiveRecord::Base.transaction do
  # create admin
  a = User.new(
    :email => 'admin@admin.com',
    :password => 'go_admin_go'
  );
  a.admin = true
  a.save

  20.times do
    User.create!(
      :email => Faker::Internet.free_email,
      :name => Faker::Name.name,
      :current_resident => true,
      :password => "password"
    )
  end

  User.create(
    :email => "user@user.com",
    :name => "Joe User",
    :password => "password",
    :current_resident => true
  )

  Chore.create!(
    :name => "Dishes",
    :description => "Wash all dishes in sink. Load and start washer.",
    :frequency => "TUE,THU"
  )

  UserChore.create!(
    :user_id => User.find_by_name("Joe User").id,
    :chore_id => Chore.find_by_name("Dishes").id,
    :date => Time.now
  )
end

