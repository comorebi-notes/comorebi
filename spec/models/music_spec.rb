require 'rails_helper'

describe Music, type: :model do
  let(:articles) { create_list(:article, 3) }
  let(:music) { create(:music, article_ids: articles.map { |article| article.id }) }
  let(:temp_sound) { create(:temp_sound) }

  it "is valid with title and sound file" do
    music = Music.new(title: "hoge", sound_file: temp_sound.file)
    expect(music).to be_valid
  end

  it "is invalid without title and sound file" do
    music = Music.new()
    expect(music).not_to be_valid
  end

  it "can have some articles" do
    expect(music.articles).to eq(articles)
  end
end
