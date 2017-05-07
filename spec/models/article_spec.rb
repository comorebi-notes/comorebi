require 'rails_helper'

describe Article, type: :model do
  let(:musics) { create_list(:music, 3) }
  let(:article) { create(:article, music_ids: musics.map { |music| music.id }) }

  it "is valid with title and description and published_at" do
    article = Article.new(title: "hoge", description: "fuga", published_at: DateTime.now)
    expect(article).to be_valid
  end

  it "is invalid without title" do
    article = Article.new()
    expect(article).not_to be_valid
  end

  it "have default status" do
    article = Article.new(title: "hoge")
    expect(article.status).to eq("drafted")
  end

  it "can have some musics" do
    expect(article.musics).to eq(musics)
  end
end
