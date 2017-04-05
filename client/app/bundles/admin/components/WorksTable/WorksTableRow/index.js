import React, { PureComponent } from 'react'
import * as utils from '../../../utils'

class WorksTableRow extends PureComponent {
  render () {
    const { id, title, categories, status, images, published_at } = this.props.work
    const image = images ? images[0] : null
    return (
      <tr className={status}>
        <td style={{ width: 60 }}>
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
        <td>
          {categories.map((category) => (
            <span className="tag is-info" key={category.id}>{category.name}</span>
          ))}
        </td>
        <td className="status">{utils.renderHumanPublishStatus(status)}</td>
        <td>{utils.humanDateTime(published_at)}</td>
      </tr>
    )
  }
}

export default WorksTableRow
