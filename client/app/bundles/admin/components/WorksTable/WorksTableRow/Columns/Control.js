import React, { PureComponent } from 'react'

import * as utils from '../../../../utils'

export default class Status extends PureComponent {
  render () {
    const { type, work } = this.props
    return (
      <td className="control is-hidden-mobile">
        {type === "articles" && (
          <span className="can-click">
            {utils.publishStatusIcon(work.status)}
          </span>
        )}
      </td>
    )
  }
}
