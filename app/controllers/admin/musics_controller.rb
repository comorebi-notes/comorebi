class Admin::MusicsController < AdminController
  def index
    render json: @musics = Music.all
  end
end
