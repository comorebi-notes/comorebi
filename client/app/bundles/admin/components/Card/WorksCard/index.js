import React from 'react'
import * as utils from '../../../utils'

const WorksCard = ({ work }) => {
  const { title, category, description, status, created_at, updated_at, musics, images, albums } = work
  const image = images ? images[0] : null
  return (
    <div className="card">
      {image && (
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={image.url} alt={image.title} />
          </figure>
        </div>
      )}

      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">
            {title}
          </p>
        </div>

        <div className="content">
          {description}
          <small style={{ display: 'block' }}>
            作成 : {utils.humanDate(created_at)}
          </small>
          {created_at !== updated_at && (
            <small>
              更新 : {utils.humanDate(updated_at)}
            </small>
          )}
        </div>
      </div>
    </div>
  )
}

export default WorksCard
