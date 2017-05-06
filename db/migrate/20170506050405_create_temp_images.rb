class CreateTempImages < ActiveRecord::Migration[5.0]
  def change
    create_table :temp_images do |t|
      t.string :file, null: false

      t.timestamps
    end
  end
end
