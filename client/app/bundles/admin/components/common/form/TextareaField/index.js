import React from 'react'
import classNames from 'classnames'
import TextareaAutosize from 'react-autosize-textarea'
import remark from 'remark'
import reactRenderer from 'remark-react'

import ErrorField from '../ErrorField'

const TextareaField = ({ input, label, placeholder, children, meta: { touched, error } }) => {
  const isError = touched && error
  return (
    <div className={classNames({ 'is-danger': isError })}>
      <label htmlFor={input.name} className="label">{label}</label>
      <div className="control has-icon has-icon-right">
        <TextareaAutosize
          {...input}
          className="textarea"
          placeholder={placeholder}
          maxRows={25}
          style={{ fontSize: '.9em', lineHeight: 1.7 }}
        />
        {false && (
          <div id="preview">
            {remark().use(reactRenderer).processSync(input.value).contents}
          </div>
        )}
        {children}
        {isError && <ErrorField error={error} /> }
      </div>
    </div>
  )
}

export default TextareaField
