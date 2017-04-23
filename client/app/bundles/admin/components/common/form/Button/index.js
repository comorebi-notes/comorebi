import React, { PureComponent } from 'react'
import classNames from 'classnames'

class Button extends PureComponent {
  render() {
    const { loading, label, type, color, size, icon, handleClick } = this.props
    const colorClassName = color || 'is-primary'
    const buttonType = type || "button"
    const buttonClassName = classNames(
      "button", colorClassName,
      { "is-loading": loading },
      { [`is-${size}`]: size },
      { "with-icon": icon }
    )
    return (
      <button type={buttonType} className={buttonClassName} onClick={handleClick}>
        {icon && !loading && (
          <span className="icon">
            <i className={classNames("fa", `fa-${icon}`)} />
          </span>
        )}
        {icon && ' '}
        {label}
      </button>
    )
  }
}

export default Button
