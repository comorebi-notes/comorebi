import React from 'react'
import classNames from 'classnames'

const SubmitButton = ({ loading, label, color, size }) => {
  const colorClassName = color || 'is-primary'
  const buttonClassName = classNames(
    "button", colorClassName,
    { "is-loading": loading },
    { [`is-${size}`]: size }
  )
  return (
    <div className="control with-button">
      <button type="submit" className={buttonClassName}>
        {label}
      </button>
    </div>
  )
}

export default SubmitButton
