class CreateMusics < ActiveRecord::Migration[5.0]
  def change
    create_table :musics do |t|
      t.string :title, null: false
      t.text :lyrics
      t.text :sound_file

      t.timestamps
    end
  end
end
