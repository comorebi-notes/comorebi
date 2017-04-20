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
    const items = input.value
    if (items.filter(value => value === name).length === 0) {
      items.push(name)
      input.onChange(items)
      onCreate({ name, target: input.name })
    }
  }
  render() {
    const { input, data, label, valueField, textField } = this.props
    const messages = {
      createNew:   "を作成",
      emptyList:   "not found.",
      emptyFilter: "not found."
    }
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
            messages={messages}
            valueField={valueField}
            textField={textField}
            duration={0}
          />
        </div>
      </div>
    )
  }
}

export default MultiselectField
