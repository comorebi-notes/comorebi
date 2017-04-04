class Admin::WorksController < AdminController
  before_action :set_musics, only: [:new, :edit]

  def index
    @works = Work.all
    works_with_children = @works.map do |work|
      work.attributes.merge(
        musics: work.musics,
        categories: work.categories,
        tags: work.tags
      )
    end
    render json: works_with_children
  end

  def create
    @work = Work.new(work_params)
    if @work.save
      redirect_to admin_works_path, notice: "作品「#{@work.title}」を追加しました。"
    else
      render action: :new
    end
  end

  def update
  end

  def destroy
    @work = Work.find(params[:id])
    if @work.destroy
      redirect_to admin_works_path, notice: "作品「#{@work.title}」を削除しました。"
    else
      render action: :new
    end
  end

  private

  def work_params
    params.require(:work).permit(
      :title, :description, :status, :published_at, :category_list, :tag_list, music_ids: []
    )
  end

  def set_musics
    @musics = Music.all
  end
end
