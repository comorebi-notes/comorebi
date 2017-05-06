class Admin::Uploads::SoundsController < ApplicationController
  def create
    temp_sound = TempSound.create(file: params[:file])
    render json: {
      id:  temp_sound.id,
      url: temp_sound.file.url
    }
  end
end
