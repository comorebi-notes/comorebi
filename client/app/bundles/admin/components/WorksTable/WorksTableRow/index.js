import React from 'react'
import * as utils from '../../../utils'

const WorksTableRow = ({ work }) => {
  const { id, title, category, tags, status, musics } = work
  const image = musics.images ? musics.images[0] : null
  return (
    <tr className={status}>
      <td>
        <figure className="image thumbnail is-1by1">
          {image ? (
            <img src={image.url} alt={image.title} />
          ) : (
            <img src="http://bulma.io/images/placeholders/1280x960.png" alt="dummy" />
          )}
        </figure>
      </td>
      <th>{id}</th>
      <td>{title}</td>
      <td>{category}</td>
      <td>{tags}</td>
      <td className="status">{utils.renderHumanPublishStatus(status)}</td>
      <td></td>
    </tr>
  )
}

export default WorksTableRow
