import React, { PureComponent } from 'react'

class Loading extends PureComponent {
  render() {
    return (
      <div className="loading">
        <i className="fa fa-spinner fa-pulse fa-3x fa-fw" />
        <span className="sr-only">
          Loading...
        </span>
      </div>
    )
  }
}

export default Loading
