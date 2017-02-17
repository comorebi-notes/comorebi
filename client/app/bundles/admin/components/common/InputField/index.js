import React from 'react'

const InputField = ({ input, name, type, label, placeholder, children, meta: { touched, error } }) => {
  const inputType = type || 'text'
  const isError = touched && error

  return (
    <div className={isError ? 'is-danger' : ''}>
      <label htmlFor={name} className="label">{label}</label>
      <div className="control has-icon has-icon-right">
        <input {...input} type={inputType} className="input" placeholder={placeholder} />
        {children}
        { isError && (
          <span className="icon is-small">
            <i className="fa fa-warning" />
          </span>
        )}
        { isError && (
          <p className="help is-danger">
            {error}
          </p>
        )}
      </div>
    </div>
  )
}

export default InputField
