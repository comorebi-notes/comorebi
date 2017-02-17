import React from 'react'

const SubmitButton = ({ loading, label, color }) => {
  const colorClassName = color || 'is-primary'
  return (
    <div className="control with-button">
      <button type="submit" className={`button ${colorClassName}${loading ? ' is-loading' : ''}`}>
        {label}
      </button>
    </div>
  )
}

export default SubmitButton
