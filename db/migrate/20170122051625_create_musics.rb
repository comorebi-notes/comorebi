class CreateMusics < ActiveRecord::Migration[5.0]
  def change
    create_table :musics do |t|
      t.string :title, null: false
      t.text :lyrics
      t.string :sound_file, null: false
      t.string :off_vocal_file

      t.timestamps
    end
  end
end
