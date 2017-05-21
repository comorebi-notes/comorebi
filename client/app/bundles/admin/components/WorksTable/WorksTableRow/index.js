import React, { PureComponent } from 'react'
import { browserHistory } from 'react-router'

import Thumbnail from './Columns/Thumbnail'
import Id from './Columns/Id'
import Title from './Columns/Title'
import Categories from './Columns/Categories'
import PublishedAt from './Columns/PublishedAt'
import Lyrics from './Columns/Lyrics'
import Control from './Columns/Control'

import * as utils from '../../../utils'

export default class WorksTableRow extends PureComponent {
  constructor() {
    super()
    this.handleClickRow   = this.handleClickRow.bind(this)
    this.changeCategories = this.changeCategories.bind(this)
  }
  handleClickRow() {
    const { type, work } = this.props
    browserHistory.push(`/admin/${type}/${work.id}`)
  }
  changeCategories(e) {
    this.props.actions.addFilteringCategories(e.target.firstChild.data)
    e.stopPropagation()
  }
  render () {
    const { filters, columns, type, work,
      work: { id, title, categories, images, status, published_at, lyrics }
    } = this.props
    const columnItems = {
      thumbnail:    <Thumbnail image={images} />,
      id:           <Id id={id} />,
      title:        <Title title={title} filters={filters} />,
      categories:   <Categories categories={categories} handleClick={this.changeCategories} />,
      published_at: <PublishedAt published_at={published_at} />,
      lyrics:       <Lyrics lyrics={lyrics} filters={filters} />,
      control:      <Control type={type} work={work} />
    }
    return (
      <tr className={utils.publishStatus(status, published_at)} onClick={this.handleClickRow}>
        {columns.map((column) => (
          React.cloneElement(columnItems[column.name], { key: column.name }))
        )}
      </tr>
    )
  }
}
