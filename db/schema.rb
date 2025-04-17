# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.0].define(version: 2025_04_17_150352) do
  create_table "appointments", force: :cascade do |t|
    t.string "email"
    t.datetime "date"
    t.integer "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "professional_id", null: false
    t.index ["professional_id"], name: "index_appointments_on_professional_id"
  end

  create_table "categories", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "professional_categories", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "professionals", force: :cascade do |t|
    t.string "name"
    t.integer "license_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "professional_category_id", null: false
    t.index ["professional_category_id"], name: "index_professionals_on_professional_category_id"
  end

  create_table "services", force: :cascade do |t|
    t.float "price"
    t.string "address"
    t.string "city"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "professional_id", null: false
    t.string "name"
    t.index ["professional_id"], name: "index_services_on_professional_id"
  end

  add_foreign_key "appointments", "professionals"
  add_foreign_key "professionals", "professional_categories"
  add_foreign_key "services", "professionals"
end
