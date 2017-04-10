import React, { Component } from 'react'
import classNames from 'classnames'
import Multiselect from 'react-widgets/lib/Multiselect'
import 'react-widgets/dist/css/react-widgets.css'

class MultiselectField extends Component {
  constructor() {
    super()
    this.handleCreate = this.handleCreate.bind(this)
  }
  handleCreate(name) {
    const { input, onCreate } = this.props
    input.value.push(name)
    onCreate({ name, target: input.name })
  }
  render() {
    const { input, data, label, valueField, textField } = this.props
    return (
      <div>
        <label htmlFor={input.name} className="label">{label}</label>
        <div className={classNames("control", input.name)}>
          <Multiselect
            {...input}
            onBlur={() => input.onBlur()}
            onCreate={this.handleCreate}
            value={input.value || []}
            data={data}
            valueField={valueField}
            textField={textField}
          />
        </div>
      </div>
    )
  }
}

export default MultiselectField
