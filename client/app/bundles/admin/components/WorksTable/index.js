import React, { Component } from 'react'

import WorksTableRow from './WorksTableRow'
import TableCaptions from '../common/TableCaptions'
import tableColumns from '../../constants/tableColumns'

class WorksTable extends Component {
  render () {
    const { type, works, filters, actions } = this.props
    const captions = <TableCaptions columns={tableColumns[type]} />
    return (
      <table className="table works with-thumbnail">
        <thead>{captions}</thead>
        <tbody>
          {works && works.map((work) => (
            <WorksTableRow
              work={work}
              type={type}
              columns={tableColumns[type]}
              filters={filters}
              actions={actions}
              key={work.id}
            />
          ))}
        </tbody>
        <tfoot>{captions}</tfoot>
      </table>
    )
  }
}

export default WorksTable
