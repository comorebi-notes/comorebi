class Admin::ArticlesController < AdminController
  def index
    articles = Article.all.map(&:with_children)
    render json: {
      articles:   articles,
      musics:     Music.all,
      categories: Article.tags_on("categories").map(&:name),
      tags:       Article.tags_on("tags").map(&:name)
    }
  end

  def create
    article = Article.new(article_params)
    if article.save
      render json: { status: :ok }
    else
      render json: article.errors, status: :unprocessable_entity
    end
  end

  def update
    article = Article.find(params[:id])
    if article.update(article_params)
      render json: { status: :ok }
    else
      render json: article.errors, status: :unprocessable_entity
    end
  end

  def destroy
    article = Article.find(params[:id])
    if article.destroy
      render json: { status: :ok }
    else
      render json: article.errors, status: :unprocessable_entity
    end
  end

  private

  def article_params
    params.require(:article).permit(
      :title, :description, :status, :published_at,
      category_list: [], tag_list: [],
      music_ids: []
    )
  end
end
