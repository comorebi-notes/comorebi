import React, { Component } from 'react'

export default class FilteringStatusField extends Component {
  render() {
    const { handleChange } = this.props
    const statuses = ["", "published", "drafted", "deleted"]
    const statusLabel = {
      "":        "すべて",
      published: "公開中",
      drafted:   "下書き",
      deleted:   "削除済"
    }
    return (
      <select onChange={handleChange}>
        {statuses.map((status) => (
          <option value={status} key={status}>
            {statusLabel[status]}
          </option>
        ))}
      </select>
    )
  }
}
