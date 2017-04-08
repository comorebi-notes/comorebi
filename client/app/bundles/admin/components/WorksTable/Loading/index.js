import React, { PureComponent } from 'react'

class Loading extends PureComponent {
  render() {
    const { colspan } = this.props
    return (
      <tr className="loading">
        <td colSpan={colspan}>
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw" />
          <span className="sr-only">
            Loading...
          </span>
        </td>
      </tr>
    )
  }
}

export default Loading
