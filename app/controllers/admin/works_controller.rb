class Admin::WorksController < AdminController
  def index
    works = Work.all.map(&:with_children)
    render json: {
      works:      works,
      musics:     Music.all,
      categories: Work.tags_on("categories").map(&:name),
      tags:       Work.tags_on("tags").map(&:name)
    }
  end

  def create
    work = Work.new(work_params)
    if work.save
      render json: { status: :ok }
    else
      render json: work.errors, status: :unprocessable_entity
    end
  end

  def update
    work = Work.find(params[:id])
    if work.update(work_params)
      render json: { status: :ok }
    else
      render json: work.errors, status: :unprocessable_entity
    end
  end

  # ajax 用に書き換え
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
      :title, :description, :status, :published_at,
      category_list: [], tag_list: [],
      music_ids: []
    )
  end
end
