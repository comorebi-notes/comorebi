class Admin::WorksController < AdminsController
  before_action :set_works, only: [:index]

  def index
  end

  def new
    @work = Work.new
  end

  def create
    @work = Work.new(work_params)

    if @work.save
      redirect_to admin_works_path, notice: "作品を追加しました。"
    else
      render action: :new
    end
  end

  private

  def set_works
    @works = Work.all
  end

  def work_params
    params.require(:work).permit(:title, :description, :category, :status)
  end
end
