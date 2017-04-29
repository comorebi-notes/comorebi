import React, { Component } from 'react'
import { Link } from 'react-router'

import FilteringWordsField from './FilteringWordsField'
import FilteringStatusField from './FilteringStatusField'
import WorksCount from '../WorksCount'
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
    const { count, totalCount, filters, selectableStatus } = this.props
    const newArticlePath = "/admin/articles/new"
    return (
      <div className="works-util-bar">
        <nav className="level">
          <div className="level-left">
            <p className="level-item">
              <Link to={newArticlePath} className="button is-primary">
                新規作成
              </Link>
            </p>
            <div className="level-item">
              <FilteringWordsField words={filters.words} handleChange={this.changeWords} />
            </div>
            {selectableStatus && (
              <div className="level-item select is-hidden-mobile">
                <FilteringStatusField handleChange={this.changeStatus} />
              </div>
            )}
            <WorksCount count={count} totalCount={totalCount} />
          </div>

          <div className="level-right">
            <div className="level-item">
              <Pagination count={count} />
            </div>
          </div>
        </nav>

        <div className="tags is-hidden-mobile">
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
    )
  }
}

export default Filters
