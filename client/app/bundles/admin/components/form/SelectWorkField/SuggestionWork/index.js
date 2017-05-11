import React, { PureComponent } from 'react'

import * as utils from '../../../../utils'

export default class SuggestionWork extends PureComponent {
  render () {
    const { item } = this.props
    return (
      <div>
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
      </div>
    )
  }
}
