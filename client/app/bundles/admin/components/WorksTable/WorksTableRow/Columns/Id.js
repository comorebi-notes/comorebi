import React, { PureComponent } from 'react'

export default class Id extends PureComponent {
  render () {
    const { id } = this.props
    return (
      <th className="id">{id}</th>
    )
  }
}
