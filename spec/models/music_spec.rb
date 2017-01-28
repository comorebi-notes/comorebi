require 'rails_helper'

describe Music, type: :model do
  let(:works) { create_list(:work, 3) }
  let(:music) { create(:music, work_ids: works.map { |work| work.id }) }

  it "is valid with title" do
    music = Music.new(title: "hoge")
    expect(music).to be_valid
  end

  it "is invalid without title" do
    music = Music.new()
    expect(music).not_to be_valid
  end

  it "can have some works" do
    expect(music.works).to eq(works)
  end
end
