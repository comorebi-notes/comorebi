import React, { Component } from 'react'

class WorksCount extends Component {
  render() {
    const { count, totalCount } = this.props
    return (
      <p className="subtitle is-5 is-hidden-mobile">
        <strong>{count}</strong>
        {count !== totalCount && (
          <span> / {totalCount}</span>
        )}
        {' '}作品
      </p>
    )
  }
}

export default WorksCount
