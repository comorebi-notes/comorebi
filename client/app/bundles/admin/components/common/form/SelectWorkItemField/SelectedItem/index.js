import React, { PureComponent } from 'react'

import * as utils from '../../../../../utils'

class SelectedItem extends PureComponent {
  constructor() {
    super()
    this.handleDelete = this.handleDelete.bind(this)
  }
  handleDelete = (event) => {
    const { item, type } = this.props
    this.props.handleDelete(event, item.id, type)
  }
  render () {
    const { item } = this.props
    return (
      <article className="media">
        <div className="media-content">
          <div className="content">
            <div>
              <small className="id">
                {utils.zeroPadding(item.id, 3)}
              </small>
              <strong>{item.title}</strong>
              <p className="date">
                <small>
                  登録日 : {utils.humanDateTime(item.created_at, true)}
                </small>
                <small>
                  更新日 : {utils.humanDateTime(item.updated_at, true)}
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className="media-right">
          <button type="button" className="delete" onClick={this.handleDelete} />
        </div>
      </article>
    )
  }
}

export default SelectedItem
