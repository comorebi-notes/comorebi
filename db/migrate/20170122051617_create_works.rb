class CreateWorks < ActiveRecord::Migration[5.0]
  def change
    create_table :works do |t|
      t.string :title, null: false
      t.text :description
      t.integer :status, default: 0, null: false
      t.datetime :published_at, null: false

      t.timestamps
    end
  end
end
