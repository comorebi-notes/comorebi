import React, { Component } from 'react'

import Icon from '../../Icon'

export default class FilteringWordsField extends Component {
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
          <Icon icon="search" size="small" />
        </p>
      </div>
    )
  }
}
