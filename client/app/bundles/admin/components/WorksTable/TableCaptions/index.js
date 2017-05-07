import React, { PureComponent } from 'react'

class TableCaptions extends PureComponent {
  render() {
    const { columns } = this.props
    return (
      <tr>
        {columns.map((column) => (
          <th key={column.label} className={column.className || ''}>
            {column.label}
          </th>
        ))}
      </tr>
    )
  }
}

export default TableCaptions
