class CreateArticleMusics < ActiveRecord::Migration[5.0]
  def change
    create_table :article_musics do |t|
      t.references :article, foreign_key: true
      t.references :music, foreign_key: true

      t.timestamps
    end
    add_index :article_musics, [:article_id, :music_id]
  end
end
