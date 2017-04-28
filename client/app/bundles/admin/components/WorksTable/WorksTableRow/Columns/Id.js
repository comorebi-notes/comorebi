import React, { PureComponent } from 'react'

class Id extends PureComponent {
  render () {
    const { id } = this.props
    return (
      <th className="id">{id}</th>
    )
  }
}

export default Id
