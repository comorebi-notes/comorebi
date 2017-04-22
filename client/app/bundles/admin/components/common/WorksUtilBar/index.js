import React, { Component } from 'react'

class WorksUtilBar extends Component {
  constructor() {
    super()
    this.handleInput = this.handleInput.bind(this)
  }
  handleInput(e) {
    this.props.handleInput(e.target.value)
  }
  render() {
    const { count, totalCount, filters } = this.props
    return (
      <nav className="level">
        <div className="level-left">
          <div className="level-item">
            <div className="field has-addons">
              <p className="control has-icon has-icon-left">
                <input
                  className="input"
                  type="text"
                  placeholder="search..."
                  value={filters.words}
                  onChange={this.handleInput}
                />
                <span className="icon is-small">
                  <i className="fa fa-search" />
                </span>
              </p>
            </div>
          </div>
          <div className="level-item">
            <p className="subtitle is-5">
              <strong>{count}</strong>
              {count !== totalCount && (
                <span> / {totalCount}</span>
              )}
              {' '}作品
            </p>
          </div>
        </div>

        <div className="level-right">
          <p className="level-item"><strong>すべて</strong></p>
          <p className="level-item"><a>公開</a></p>
          <p className="level-item"><a>下書き</a></p>
          <p className="level-item"><a>削除</a></p>
          <p className="level-item"><a className="button is-primary">新規作成</a></p>
        </div>
      </nav>
    )
  }
}

export default WorksUtilBar
