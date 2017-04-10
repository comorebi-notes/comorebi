import React from 'react'
import classNames from 'classnames'
import ErrorField from '../ErrorField'

const InputField = ({ input, type, label, placeholder, children, meta: { touched, error } }) => {
  const inputType = type || 'text'
  const isError = touched && error

  return (
    <div className={classNames({ 'is-danger': isError })}>
      <label htmlFor={input.name} className="label">{label}</label>
      <div className="control has-icon has-icon-right">
        {type === 'textarea' ? (
          <textarea {...input} className="textarea" placeholder={placeholder} />
        ) : (
          <input {...input} type={inputType} className="input" placeholder={placeholder} />
        )}
        {children}
        {isError && <ErrorField error={error} /> }
      </div>
    </div>
  )
}

export default InputField
