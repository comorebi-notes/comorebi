import React, { Component } from 'react'

class FilteringWordsField extends Component {
  render() {
    const { words, handleChange } = this.props
    return (
      <div className="field has-addons">
        <p className="control has-icon has-icon-left">
          <input
            className="input"
            type="text"
            placeholder="search..."
            value={words}
            onChange={handleChange}
          />
          <span className="icon is-small">
            <i className="fa fa-search" />
          </span>
        </p>
      </div>
    )
  }
}

export default FilteringWordsField
