import React, { Component }  from 'react'
import classNames from 'classnames'

import ErrorField from '../ErrorField'

export default class InputField extends Component {
  render() {
    const { input, type, label, placeholder, children, meta: { touched, error } } = this.props
    const inputType = type || 'text'
    const isError = touched && error
    return (
      <div className={classNames({ 'is-danger': isError })}>
        <label htmlFor={input.name} className="label">{label}</label>
        <div className="control has-icon has-icon-right">
          <input {...input} type={inputType} className="input" placeholder={placeholder} />
          {children}
          {isError && <ErrorField error={error} />}
        </div>
      </div>
    )
  }
}
