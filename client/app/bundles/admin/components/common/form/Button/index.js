import React, { PureComponent } from 'react'
import classNames from 'classnames'

import Icon from '../../../common/Icon'

export default class Button extends PureComponent {
  render() {
    const { loading, label, type, color, size, icon, disabled, handleClick } = this.props
    const colorClassName = color === "default" ? "" : (color || 'is-primary')
    const buttonType = type || "button"
    const buttonClassName = classNames(
      "button", colorClassName,
      { "is-loading": loading },
      { [`is-${size}`]: size },
      { "with-icon": icon }
    )
    return (
      <button
        type={buttonType}
        className={buttonClassName}
        onClick={handleClick}
        disabled={disabled}
      >
        {icon && !loading && <Icon icon={icon} />}
        {icon && ' '}
        {label}
      </button>
    )
  }
}
