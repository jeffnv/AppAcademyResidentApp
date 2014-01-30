json.array! @user_chores do |user_chore|
  json.(
    user_chore, 
    :user_id, 
    :chore_id, 
    :date, 
    :created_at, 
    :updated_at, 
    :complete
  )
  json.chore_name user_chore.chore.name
  json.assignee(user_chore.user_id ? user_chore.user.name : "none")

end
