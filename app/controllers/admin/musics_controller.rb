class Admin::MusicsController < AdminController
  def index
    render json: {
      musics: Music.all
    }
  end

  def create
    music = Music.new(music_params_with_files)
    if music.save
      render json: { status: :ok }
    else
      render json: music.errors, status: :unprocessable_entity
    end
  end

  def update
    music = Music.find(params[:id])
    [:sound_file, :off_vocal_file].each do |target|
      music.send("remove_#{target}=", true) if music_params["#{target}_id"].try(:zero?)
    end
    if music.update(music_params_with_files)
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
    # sound_file ...... Music の column (SoundUploader)
    # sound_file_id ... sound_file に TempSound を紐付けるための ID
    params.require(:music).permit(:title, :lyrics, :sound_file_id, :off_vocal_file_id)
  end

  def music_params_with_files
    return @music_params_with_files if @music_params_with_files

    @music_params_with_files = music_params.to_unsafe_hash
    [:sound_file, :off_vocal_file].each do |target|
      if id = @music_params_with_files.delete("#{target}_id")
        @music_params_with_files[target] = TempSound.find_by(id: id).try(:file)
      end
    end
    @music_params_with_files
  end
end
