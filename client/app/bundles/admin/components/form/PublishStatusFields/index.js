import React, { Component }  from 'react'
import { Field } from 'redux-form'
import classNames from 'classnames'

export default class PublishStatusFields extends Component {
  render() {
    const { status, label } = this.props
    const statusesData = [
      { name: "published", caption: "公開",   icon: "check-circle" },
      { name: "closed",    caption: "非公開", icon: "minus-circle" }
    ]
    const buttonClassName = (name) => {
      const value = status.input.value
      return classNames(
        "button",
        { "is-info": value === statusesData[0].name && value === name },
        { "is-dark": value === statusesData[1].name && value === name }
      )
    }
    return (
      <div className="select-status">
        {label && <label htmlFor="status" className="label">{label}</label>}
        <div className="control field has-addons">
          {statusesData.map((data) => (
            <p className="control" key={data.name}>
              <label className={buttonClassName(data.name)}>
                <span className="icon with-text">
                  <i className={classNames("fa", `fa-${data.icon}`)} />
                </span>
                <span>{data.caption}</span>
                <Field name={status.input.name} component="input" type="radio" value={data.name} />
              </label>
            </p>
          ))}
        </div>
      </div>
    )
  }
}
