import React from 'react'
import classNames from 'classnames'

import ErrorField from '../ErrorField'

const TextareaField = ({ input, label, placeholder, children, meta: { touched, error } }) => {
  const isError = touched && error
  return (
    <div className={classNames({ 'is-danger': isError })}>
      <label htmlFor={input.name} className="label">{label}</label>
      <div className="control has-icon has-icon-right">
        <textarea {...input} className="textarea" placeholder={placeholder} />
        {children}
        {isError && <ErrorField error={error} /> }
      </div>
    </div>
  )
}

export default TextareaField
