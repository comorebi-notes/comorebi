import React from 'react'

const WorksTableCaptions = ({ columns }) => (
  <tr>
    {columns.map((column) => (
      <th key={column.label} className={column.className || ''}>
        {column.label}
      </th>
    ))}
  </tr>
)

export default WorksTableCaptions
