import React from 'react'

const WorksTableHeader = ({ columns }) => (
  <thead>
    <tr>
      {columns.map((column) => (
        <th key={column}>{column}</th>
      ))}
    </tr>
  </thead>
)

export default WorksTableHeader
