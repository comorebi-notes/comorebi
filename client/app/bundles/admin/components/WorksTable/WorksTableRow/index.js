import React, { PureComponent } from 'react'
import { browserHistory } from 'react-router'
import * as utils from '../../../utils'

class WorksTableRow extends PureComponent {
  render () {
    const { id, title, categories, status, images, published_at } = this.props.work
    const image = images ? images[0] : null
    return (
      <tr
        className={status}
        onClick={() => browserHistory.push(`/admin/works/${id}`)}
      >
        <td className="thumbnail">
          <figure className="image thumbnail is-1by1">
            {image ? (
              <img src={image.url} alt={image.title} />
            ) : (
              <img src="http://bulma.io/images/placeholders/1280x960.png" alt="dummy" />
            )}
          </figure>
        </td>
        <th className="id">{id}</th>
        <td className="works-title">{title}</td>
        <td className="category is-hidden-mobile">
          {categories.map((category) => (
            <span className="tag is-info" key={category.id}>{category.name}</span>
          ))}
        </td>
        <td className="status is-hidden-mobile">{utils.renderHumanPublishStatus(status)}</td>
        <td className="published_at">{utils.humanDateTime(published_at)}</td>
      </tr>
    )
  }
}

export default WorksTableRow
