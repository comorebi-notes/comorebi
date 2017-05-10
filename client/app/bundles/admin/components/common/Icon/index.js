import React, { PureComponent } from 'react'
import classNames from 'classnames'

export default class Icon extends PureComponent {
  render() {
    const { icon, size, className } = this.props
    return (
      <span className={classNames("icon", className, { [`is-${size}`]: size })}>
        <i className={classNames("fa", `fa-${icon}`)} />
      </span>
    )
  }
}
