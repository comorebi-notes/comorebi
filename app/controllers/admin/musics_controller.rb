class Admin::MusicsController < AdminController
  def index
    musics = Music.all.map(&:with_children)
    render json: {
      musics:   musics,
      articles: Article.all
    }
  end
end
