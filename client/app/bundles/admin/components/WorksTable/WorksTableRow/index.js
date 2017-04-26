import React, { PureComponent } from 'react'
import { browserHistory } from 'react-router'
import Highlighter from 'react-highlight-words'

import * as filter from '../../../utils/filter'
import * as utils from '../../../utils'

class WorksTableRow extends PureComponent {
  constructor() {
    super()
    this.handleClickRow   = this.handleClickRow.bind(this)
    this.changeCategories = this.changeCategories.bind(this)
  }
  handleClickRow() {
    browserHistory.push(`/admin/works/${this.props.work.id}`)
  }
  changeCategories(e) {
    this.props.actions.addFilteringCategories(e.target.firstChild.data)
    e.stopPropagation()
  }
  render () {
    const { work, filters } = this.props
    const { id, title, categories, status, images, published_at } = work
    const image = images ? images[0] : null
    return (
      <tr className={status} onClick={this.handleClickRow}>
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
        <td className="works-title">
          {filters && filters.words ? (
            <Highlighter
              searchWords={filter.splitFilteringWords(filters.words)}
              textToHighlight={title}
            />
          ) : title}
        </td>
        <td className="category is-hidden-mobile">
          {categories && categories.map((category) => (
            <span
              className="tag can-click is-info"
              onClick={this.changeCategories}
              key={category}
            >
              {category}
            </span>
          ))}
        </td>
        <td className="status is-hidden-mobile">{utils.publishStatusIcon(status)}</td>
        <td className="published_at">{utils.humanDateTime(published_at)}</td>
      </tr>
    )
  }
}

export default WorksTableRow
