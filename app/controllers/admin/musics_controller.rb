class Admin::MusicsController < AdminController
  def index
    musics = Music.all.map(&:with_children)
    render json: {
      musics: musics
    }
  end

  def create
    music = Music.new(music_params)
    if music.save
      render json: { status: :ok }
    else
      render json: music.errors, status: :unprocessable_entity
    end
  end

  def update
    music = Music.find(params[:id])
    if music.update(music_params)
      render json: { status: :ok }
    else
      render json: music.errors, status: :unprocessable_entity
    end
  end

  def destroy
    music = Music.find(params[:id])
    if music.destroy
      render json: { status: :ok }
    else
      render json: music.errors, status: :unprocessable_entity
    end
  end

  private

  def music_params
    params.require(:music).permit(
      :title, :lyrics, :sound_file, :off_vocal_file
    )
  end
end
