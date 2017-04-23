import React, { Component } from 'react'
import Autosuggest from 'react-autosuggest'

import SuggestionItem from './SuggestionItem'
import SelectedItems from './SelectedItems'
import * as utils from '../../../../utils'

class SelectWorkItemField extends Component {
  constructor() {
    super()
    this.state = {
      value: '',
      suggestions: []
    }
    const bindFunctions = [
      'onChange',
      'onSuggestionsFetchRequested',
      'onSuggestionsClearRequested',
      'onSuggestionSelected',
      'getSuggestions',
      'getSuggestionValue',
      'renderSuggestion',
      'renderSectionTitle',
      'handleDelete',
      'handleAllDelete'
    ]
    bindFunctions.map((name) => (this[name] = this[name].bind(this)))
  }
  onChange = (event, { newValue }) => {
    this.setState({ value: newValue })
  }
  onSuggestionsFetchRequested = ({ value }) => (
    this.setState({ suggestions: this.getSuggestions(value) })
  )
  onSuggestionsClearRequested = () => (
    this.setState({ suggestions: [] })
  )
  onSuggestionSelected = (event, { suggestion, sectionIndex, method }) => {
    const { workItems, input } = this.props
    const item_ids = input.value
    const target = workItems[sectionIndex].title
    const targetItemIds = item_ids[target] || []
    if (!targetItemIds.includes(suggestion.id)) {
      if (item_ids[target]) {
        item_ids[target].push(suggestion.id)
      } else {
        item_ids[target] = [suggestion.id]
      }
      input.onChange(item_ids)
    }
    this.setState({ value: '' })
    if (method === 'enter') event.preventDefault()
  }
  getSuggestions = (value) => {
    const { workItems, input } = this.props
    const unselectedWorkItems = utils.unselectedWorkItems(workItems, input.value)
    const inputValue = value.trim().toLowerCase()
    return inputValue === '*' ? unselectedWorkItems : (
      unselectedWorkItems.map((workItem) => ({
        title: workItem.title,
        items: workItem.items.filter((item) => (
          item.title.toLowerCase().indexOf(inputValue) !== -1
        ))
      }))
    )
  }
  getSuggestionValue = (suggestion) => suggestion.title
  getSectionSuggestions = (section) => section.items
  handleDelete = (event, id, target) => {
    const item_ids = this.props.input.value
    const index = item_ids[target].indexOf(id)
    if (index >= 0) item_ids[target].splice(index, 1)
    this.props.input.onChange(item_ids)
    this.onSuggestionsClearRequested()
  }
  handleAllDelete = () => this.props.input.onChange({})
  renderSuggestion = (suggestion) => (<SuggestionItem item={suggestion} />)
  renderSectionTitle = (section) => (
    <h4 className="title is-4">
      {utils.workItemIcon(section.title)}
      {section.title}
    </h4>
  )

  render () {
    const { input, label, placeholder, workItems } = this.props
    const item_ids = input.value
    const inputProps = {
      placeholder,
      value: this.state.value,
      onChange: this.onChange
    }
    const theme = {
      input: "input",
      suggestion: "media",
      suggestionsContainerOpen: "box suggestionsContainerOpen",
      suggestionHighlighted: "suggestionHighlighted"
    }
    return (
      <div>
        <label htmlFor="work_item" className="label">{label}</label>
        <div className="select-work-item">
          <div className="control">
            <Autosuggest
              suggestions={this.state.suggestions}
              onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              onSuggestionSelected={this.onSuggestionSelected}
              getSuggestionValue={this.getSuggestionValue}
              renderSuggestion={this.renderSuggestion}
              renderSectionTitle={this.renderSectionTitle}
              getSectionSuggestions={this.getSectionSuggestions}
              multiSection
              inputProps={inputProps}
              theme={theme}
            />
          </div>
          <div className="field is-grouped">
            <p className="control">
              <a className="button is-primary">
                新規作成
              </a>
            </p>
            <p className="control">
              <button type="button" className="button" onClick={this.handleAllDelete}>
                すべて解除
              </button>
            </p>
          </div>
          <SelectedItems
            items={workItems}
            ids={item_ids}
            renderSectionTitle={this.renderSectionTitle}
            handleDelete={this.handleDelete}
          />
        </div>
      </div>
    )
  }
}

export default SelectWorkItemField
