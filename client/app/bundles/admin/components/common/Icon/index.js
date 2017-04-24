import React, { PureComponent } from 'react'
import classNames from 'classnames'

class Icon extends PureComponent {
  render() {
    const { icon, size } = this.props
    return (
      <span className={classNames("icon", { [`is-${size}`]: size })}>
        <i className={classNames("fa", `fa-${icon}`)} />
      </span>
    )
  }
}

export default Icon
