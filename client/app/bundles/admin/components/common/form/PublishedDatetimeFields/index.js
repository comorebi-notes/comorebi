import React, { Component }  from 'react'
import classNames from 'classnames'

import ErrorField from '../ErrorField'

export default class PublishedDatetimeFields extends Component {
  render() {
    const { label, published_date, published_time } = this.props
    const isError = (field) => field.meta.touched && field.meta.error
    const errorClassName = (field) => classNames({ 'is-danger': isError(field) })
    const fieldsData = [
      { field: published_date, type: "date", placeholder: "1988/03/30" },
      { field: published_time, type: "time", placeholder: "10:00" }
    ]

    return (
      <div>
        <label htmlFor="published_date" className="label">{label}</label>
        <div className="select-datetime">
          {fieldsData.map((data) => (
            <div className={errorClassName(data.field)} key={data.field.input.name}>
              <div className="control has-icon has-icon-right">
                <input {...data.field.input} className="input" type={data.type} placeholder={data.placeholder} />
                {isError(data.field) && <ErrorField error={data.field.meta.error} />}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
