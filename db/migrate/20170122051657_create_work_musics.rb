class CreateWorkMusics < ActiveRecord::Migration[5.0]
  def change
    create_table :work_musics do |t|
      t.references :Work, foreign_key: true
      t.references :Music, foreign_key: true

      t.timestamps
    end
    add_index :work_musics, [:work_id, :music_id]
  end
end
