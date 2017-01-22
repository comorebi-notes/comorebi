class CreateWorks < ActiveRecord::Migration[5.0]
  def change
    create_table :works do |t|
      t.string :title, null: false
      t.integer :category, default: 0, null: false
      t.text :description

      t.timestamps
    end
    add_index :works, :category
  end
end
