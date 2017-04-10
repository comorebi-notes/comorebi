class Admin::WorksController < AdminController
  def index
    @works = Work.all
    works_with_children = @works.map do |work|
      work.attributes.merge(
        # musics:     work.musics,
        categories: work.category_list,
        tags:       work.tag_list
      )
    end
    render json: {
      works: works_with_children,
      categories: Work.tags_on("categories").map(&:name),
      tags: Work.tags_on("tags").map(&:name)
    }
  end

  # ajax 用に書き換え
  def create
    @work = Work.new(work_params)
    if @work.save
      redirect_to admin_works_path, notice: "作品「#{@work.title}」を追加しました。"
    else
      render action: :new
    end
  end

  # ajax 用に書き換え
  def update
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
      :category_list, :tag_list,
      music_ids: []
    )
  end
end
