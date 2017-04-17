import React, { Component } from 'react'
import Autosuggest from 'react-autosuggest'

import SuggestionItem from './SuggestionItem'
import SelectedItem from './SelectedItem'
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
      'handleDelete'
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
    if (!item_ids[target].includes(suggestion.id)) {
      item_ids[target].push(suggestion.id)
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
    this.onSuggestionsClearRequested()
    event.preventDefault()
  }
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
      value:       this.state.value,
      placeholder,
      onChange:    this.onChange
    }
    const theme = {
      input: "input",
      suggestionsContainerOpen: "box suggestionsContainerOpen",
      suggestion: "media",
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
              <a className="button">
                すべて解除
              </a>
            </p>
          </div>
          <div className="selected-item">
            {item_ids && (
              Object.keys(item_ids).map((type) => (
                item_ids[type].length > 0 && (
                  <div key={type}>
                    {this.renderSectionTitle(utils.targetSection(workItems, type))}
                    {item_ids[type].map((id) =>
                      <SelectedItem
                        item={utils.selectedItem(workItems, type, id)}
                        type={type}
                        key={id}
                        handleDelete={this.handleDelete}
                        showDeleteButton
                      />
                    )}
                  </div>
                )
              ))
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default SelectWorkItemField
