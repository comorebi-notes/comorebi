import React from 'react'

const WorksTableFooter = ({ columns }) => (
  <tfoot>
    <tr>
      {columns.map((column) => (
        <th key={column}>{column}</th>
      ))}
    </tr>
  </tfoot>
)

export default WorksTableFooter
