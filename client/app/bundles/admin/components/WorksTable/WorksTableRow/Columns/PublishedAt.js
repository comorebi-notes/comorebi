import React, { PureComponent } from 'react'

import * as utils from '../../../../utils'

class PublishedAt extends PureComponent {
  render () {
    const { published_at } = this.props
    return (
      <td className="published_at">
        {utils.humanDateTime(published_at)}
      </td>
    )
  }
}

export default PublishedAt
