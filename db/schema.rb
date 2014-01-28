# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20140127231539) do

  create_table "chores", :force => true do |t|
    t.string   "name",        :null => false
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
    t.text     "description"
    t.string   "frequency"
  end

  create_table "user_chores", :force => true do |t|
    t.integer  "user_id"
    t.integer  "chore_id",                      :null => false
    t.date     "date",                          :null => false
    t.datetime "created_at",                    :null => false
    t.datetime "updated_at",                    :null => false
    t.boolean  "complete",   :default => false, :null => false
  end

  add_index "user_chores", ["chore_id"], :name => "index_user_chores_on_chore_id"
  add_index "user_chores", ["user_id"], :name => "index_user_chores_on_user_id"

  create_table "users", :force => true do |t|
    t.string   "email",                               :null => false
    t.string   "password_digest",                     :null => false
    t.datetime "created_at",                          :null => false
    t.datetime "updated_at",                          :null => false
    t.string   "session_token",                       :null => false
    t.boolean  "admin",            :default => false, :null => false
    t.string   "name"
    t.boolean  "current_resident", :default => false, :null => false
  end

  add_index "users", ["email"], :name => "index_users_on_username", :unique => true
  add_index "users", ["session_token"], :name => "index_users_on_session_token", :unique => true

end
