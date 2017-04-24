import React, { Component } from 'react'
import { Link } from 'react-router'

import FilteringWordsField from './FilteringWordsField'
import FilteringStatusField from './FilteringStatusField'
import Pagination from '../Pagination'

class Filters extends Component {
  constructor() {
    super()
    this.changeWords    = this.changeWords.bind(this)
    this.changeStatus   = this.changeStatus.bind(this)
    this.deleteCategory = this.deleteCategory.bind(this)
  }
  changeWords(e) {
    this.props.actions.changeFilteringWords(e.target.value)
  }
  changeStatus(e) {
    this.props.actions.changeFilteringStatus(e.target.value)
  }
  deleteCategory(category) {
    this.props.actions.deleteFilteringCategories(category)
  }
  render() {
    const { count, filters } = this.props
    const newWorkPath = "/admin/works/new"
    return (
      <nav className="level works-util-bar">
        <div className="level-left">
          <p className="level-item">
            <Link to={newWorkPath} className="button is-primary">
              新規作成
            </Link>
          </p>
          <div className="level-item">
            <FilteringWordsField words={filters.words} handleChange={this.changeWords} />
          </div>
          <div className="level-item select is-hidden-mobile">
            <FilteringStatusField handleChange={this.changeStatus} />
          </div>
          <div className="level-item is-hidden-mobile">
            {filters.categories.map((category) => (
              <span
                className="tag can-click is-info is-medium"
                onClick={() => this.deleteCategory(category)}
                key={category}
              >
                {category}
                <span className="delete" />
              </span>
            ))}
          </div>
        </div>

        <div className="level-right">
          <div className="level-item">
            <Pagination count={count} />
          </div>
        </div>
      </nav>
    )
  }
}

export default Filters
