import React, { Component } from 'react'
import classNames from 'classnames'

class FilteringStatusField extends Component {
  render() {
    const { filteringStatus, handleChange } = this.props
    const statuses = ["", "published", "drafted", "deleted"]
    const statusLabel = {
      "":        "すべて",
      published: "公開中",
      drafted:   "下書き",
      deleted:   "削除済"
    }
    const labelClassName = (status) => (
      classNames(
        "radio", "level-item",
        { checked: status === filteringStatus }
      )
    )
    return (
      <div style={{ display: "flex", marginRight: ".75rem" }}>
        {statuses.map((status) => (
          <label
            className={labelClassName(status)}
            key={status}
          >
            <input
              type="radio"
              name="status"
              value={status}
              checked={status === filteringStatus}
              onChange={handleChange}
            />
            {statusLabel[status]}
          </label>
        ))}
      </div>
    )
  }
}

export default FilteringStatusField
