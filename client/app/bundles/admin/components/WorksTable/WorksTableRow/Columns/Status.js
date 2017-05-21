import React, { PureComponent } from 'react'

import * as utils from '../../../../utils'

export default class Status extends PureComponent {
  render () {
    const { status } = this.props
    return (
      <td className="status is-hidden-mobile">
        {utils.publishStatusIcon(status)}
      </td>
    )
  }
}
