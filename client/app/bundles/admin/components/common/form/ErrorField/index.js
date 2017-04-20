import React from 'react'

const ErrorField = ({ error }) => (
  <div>
    <span className="icon is-small">
      <i className="fa fa-warning" />
    </span>
    <p className="help is-danger">
      {error}
    </p>
  </div>
)

export default ErrorField
