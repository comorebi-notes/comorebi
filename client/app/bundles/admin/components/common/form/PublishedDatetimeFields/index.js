import React from 'react'
import classNames from 'classnames'

import ErrorField from '../ErrorField'

const SelectDatetimeFields = (fields) => {
  const { published_date, published_time } = fields
  const isError = (field) => field.meta.touched && field.meta.error
  const errorClassName = (field) => classNames({ 'is-danger': isError(field) })
  const fieldsData = [
    { field: published_date, type: "date", placeholder: "1988/03/30" },
    { field: published_time, type: "time", placeholder: "10:00" }
  ]

  return (
    <div>
      <label htmlFor="published_date" className="label">{fields.label}</label>
      <div className="select-datetime">
        {fieldsData.map((data) => (
          <div className={errorClassName(data.field)} key={data.field.input.name}>
            <div className="control">
              <input {...data.field.input} className="input" type={data.type} placeholder={data.placeholder} />
              {isError(data.field) && <ErrorField error={data.field.meta.error} />}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SelectDatetimeFields
