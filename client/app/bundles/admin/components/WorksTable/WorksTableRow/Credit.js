import React, { PureComponent } from 'react'

class Credit extends PureComponent {
  render () {
    const { credit } = this.props
    return (
      <td className="credit">{credit}</td>
    )
  }
}

export default Credit
