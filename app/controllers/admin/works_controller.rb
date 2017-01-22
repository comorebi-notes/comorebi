class Admin::WorksController < AdminsController
  def index
    @works = Work.all
  end

  def new
    @work = Work.new
  end

  def create
    @work = Work.new(work_params)
    if @work.save
      redirect_to admin_works_path, notice: "作品「#{@work.title}」を追加しました。"
    else
      render action: :new
    end
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
    params.require(:work).permit(:title, :description, :category, :status)
  end
end
