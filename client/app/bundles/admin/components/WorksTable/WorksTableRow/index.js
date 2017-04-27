import React, { PureComponent } from 'react'
import { browserHistory } from 'react-router'

import Thumbnail from './Thumbnail'
import Id from './Id'
import Title from './Title'
import Categories from './Categories'
import Status from './Status'
import PublishedAt from './PublishedAt'
import Lyrics from './Lyrics'
import Credit from './Credit'

class WorksTableRow extends PureComponent {
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
    const { filters, columns,
      work: { id, title, categories, status, images, published_at, lyrics, credit }
    } = this.props
    const columnItems = {
      thumbnail:    <Thumbnail image={images} />,
      id:           <Id id={id} />,
      title:        <Title title={title} filters={filters} />,
      categories:   <Categories categories={categories} handleClick={this.changeCategories} />,
      status:       <Status status={status} />,
      published_at: <PublishedAt published_at={published_at} />,
      lyrics:       <Lyrics lyrics={lyrics} filters={filters} />,
      credit:       <Credit credit={credit} />
    }
    return (
      <tr className={status} onClick={this.handleClickRow}>
        {columns.map((column) => (
          React.cloneElement(columnItems[column.name], { key: column.name }))
        )}
      </tr>
    )
  }
}

export default WorksTableRow
