import React, { Component } from 'react'

import WorksCount from './WorksCount'
import FilteringWordsField from './FilteringWordsField'
import FilteringStatusField from './FilteringStatusField'

class WorksUtilBar extends Component {
  constructor() {
    super()
    this.changeWords = this.changeWords.bind(this)
    this.changeStatus = this.changeStatus.bind(this)
  }
  changeWords(e) {
    this.props.actions.changeFilteringWords(e.target.value)
  }
  changeStatus(e) {
    this.props.actions.changeFilteringStatus(e.target.value)
  }
  render() {
    const { count, totalCount, filters } = this.props
    return (
      <nav className="level works-util-bar">
        <div className="level-left">
          <div className="level-item">
            <FilteringWordsField words={filters.words} handleChange={this.changeWords} />
          </div>
          <div className="level-item">
            <WorksCount count={count} totalCount={totalCount} />
          </div>
        </div>

        <div className="level-right">
          <FilteringStatusField filteringStatus={filters.status} handleChange={this.changeStatus} />
          <p className="level-item">
            <a className="button is-primary">新規作成</a>
          </p>
        </div>
      </nav>
    )
  }
}

export default WorksUtilBar
