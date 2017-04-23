require 'rails_helper'

describe Work, type: :model do
  let(:musics) { create_list(:music, 3) }
  let(:work) { create(:work, music_ids: musics.map { |music| music.id }) }

  it "is valid with title and description and published_at" do
    work = Work.new(title: "hoge", description: "fuga", published_at: DateTime.now)
    expect(work).to be_valid
  end

  it "is invalid without title" do
    work = Work.new()
    expect(work).not_to be_valid
  end

  it "have default status" do
    work = Work.new(title: "hoge")
    expect(work.status).to eq("drafted")
  end

  it "can have some musics" do
    expect(work.musics).to eq(musics)
  end
end
