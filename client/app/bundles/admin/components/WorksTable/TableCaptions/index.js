import React, { PureComponent } from 'react'

export default class TableCaptions extends PureComponent {
  render() {
    const { columns } = this.props
    return (
      <tr>
        {columns.map((column) => (
          <th key={column.name} className={column.className || ''}>
            {column.label}
          </th>
        ))}
      </tr>
    )
  }
}
