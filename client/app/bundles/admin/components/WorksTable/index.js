import React, { Component } from 'react'

import WorksTableCaptions from './WorksTableCaptions'
import WorksTableRow from './WorksTableRow'
import tableLabel from '../../constants/tableLabel'

class WorksTable extends Component {
  render () {
    const { works, filters } = this.props
    const captions = <WorksTableCaptions columns={tableLabel} />
    return (
      <table className="table works with-thumbnail">
        <thead>{captions}</thead>
        <tbody>
          {works && works.map((work) => (
            <WorksTableRow
              work={work}
              filters={filters}
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
