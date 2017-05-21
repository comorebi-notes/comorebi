import React, { Component } from 'react'
import Autosuggest from 'react-autosuggest'
import deepcopy from 'deepcopy'

import SuggestionWork from './SuggestionWork'
import SelectedWorks from './SelectedWorks'
import * as utils from '../../../utils'

export default class SelectWorkField extends Component {
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
    const { works, input } = this.props
    const work_ids = input.value
    const target = works[sectionIndex].title
    const targetWorkIds = work_ids[target] || []
    if (!targetWorkIds.includes(suggestion.id)) {
      if (work_ids[target]) {
        work_ids[target].push(suggestion.id)
      } else {
        work_ids[target] = [suggestion.id]
      }
      input.onChange(work_ids)
    }
    this.setState({ value: '' })
    if (method === 'enter') event.preventDefault()
  }
  getSuggestions = (value) => {
    const { works, input } = this.props
    const unselectedWorks = utils.unselectedWorks(works, input.value)
    const inputValue = value.trim().toLowerCase()
    return inputValue === '*' ? unselectedWorks : (
      unselectedWorks.map((work) => ({
        title: work.title,
        items: work.items.filter((item) => (
          item.title.toLowerCase().indexOf(inputValue) !== -1
        ))
      }))
    )
  }
  getSuggestionValue = (suggestion) => suggestion.title
  getSectionSuggestions = (section) => section.items
  handleDelete = (event, id, target) => {
    const work_ids = deepcopy(this.props.input.value)
    const index = work_ids[target].indexOf(id)
    if (index >= 0) work_ids[target].splice(index, 1)
    this.props.input.onChange(work_ids)
  }
  handleAllDelete = () => this.props.input.onChange({})
  renderSuggestion = (suggestion) => (<SuggestionWork item={suggestion} />)
  renderSectionTitle = (section) => (
    <h4 className="title is-4">
      {utils.workIcon(section.title)}
      {section.title}
    </h4>
  )

  render () {
    const { input, label, placeholder, works } = this.props
    const work_ids = input.value
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
        <label htmlFor="work" className="label">{label}</label>
        <div className="select-work">
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
          <SelectedWorks
            items={works}
            ids={work_ids}
            renderSectionTitle={this.renderSectionTitle}
            handleDelete={this.handleDelete}
          />
        </div>
      </div>
    )
  }
}
