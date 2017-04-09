import React from 'react'
import { Field } from 'redux-form'
import classNames from 'classnames'

const PublishStatusFields = ({ status, label }) => {
  const statusesData = [
    { name: "published", caption: "公開",   icon: "check-circle" },
    { name: "drafted",   caption: "下書き", icon: "file-text-o" },
    { name: "deleted",   caption: "削除",   icon: "trash" }
  ]
  const buttonClassName = (name) => {
    const value = status.input.value
    return classNames(
      "button",
      { "is-info":    value === statusesData[0].name && value === name },
      { "is-warning": value === statusesData[1].name && value === name },
      { "is-dark":    value === statusesData[2].name && value === name }
    )
  }

  return (
    <div className="field">
      <label htmlFor="status" className="label">{label}</label>
      <div className="select-status control has-addons">
        {statusesData.map((data) => (
          <label className={buttonClassName(data.name)} key={data.name}>
            <span className="icon">
              <i className={`fa fa-${data.icon}`} />
            </span>
            <span>{data.caption}</span>
            <Field name={status.input.name} component="input" type="radio" value={data.name} />
          </label>
        ))}
      </div>
    </div>
  )
}

export default PublishStatusFields
