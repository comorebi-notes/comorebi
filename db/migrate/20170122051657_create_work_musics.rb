class CreateWorkMusics < ActiveRecord::Migration[5.0]
  def change
    create_table :work_musics do |t|
      t.references :work, foreign_key: true
      t.references :music, foreign_key: true

      t.timestamps
    end
    add_index :work_musics, [:work_id, :music_id]
  end
end
