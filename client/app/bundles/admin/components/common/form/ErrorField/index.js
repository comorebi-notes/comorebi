import React from 'react'

import Icon from '../../Icon'

const ErrorField = ({ error }) => (
  <div>
    <Icon icon="warning" size="small" />
    <p className="help is-danger">
      {error}
    </p>
  </div>
)

export default ErrorField
