import React, { PureComponent } from 'react'

export default class ProgressBar extends PureComponent {
  render() {
    const { name } = this.props
    return (
      <div className="dropzone-progress">
        <progress
          className="progress is-info"
          id={`progress-bar-${name}`}
          value="0"
          max="100"
        />
        <span id={`progress-text-${name}`} />
      </div>
    )
  }
}
