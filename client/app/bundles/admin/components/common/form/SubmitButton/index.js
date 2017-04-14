import React from 'react'
import classNames from 'classnames'

const SubmitButton = ({ loading, label, color }) => {
  const colorClassName = color || 'is-primary'
  const buttonClassName = classNames(
    "button", colorClassName,
    { "is-loading": loading }
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
