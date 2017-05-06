class CreateTempSounds < ActiveRecord::Migration[5.0]
  def change
    create_table :temp_sounds do |t|
      t.string :file, null: false

      t.timestamps
    end
  end
end
