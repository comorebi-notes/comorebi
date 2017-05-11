import React, { PureComponent } from 'react'

import Icon from '../../common/Icon'

export default class ErrorField extends PureComponent {
  render() {
    const { error, className } = this.props
    return (
      <div className={className}>
        <Icon icon="warning" size="small" />
        <p className="help is-danger">
          {error}
        </p>
      </div>
    )
  }
}
