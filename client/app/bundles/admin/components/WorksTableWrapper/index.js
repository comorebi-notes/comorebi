import React, { Component } from 'react'

import Filters from '../common/Filters'
import WorksTable from '../WorksTable'
import Loading from '../common/Loading'
import Pagination from '../common/Pagination'
import * as filter from '../../utils/filter'

class WorksTableWrapper extends Component {
  componentDidMount() {
    const { actions, handleLoad } = this.props
    actions.clearFilters()
    handleLoad()
  }
  render() {
    const { actions, type, loading, works, filters } = this.props
    const filteredWorks = filter.filteredItems(works, filters, type)
    const pagedWorks = filter.pagedItems(filteredWorks, filters.page)
    const count = filteredWorks.length
    return (
      <div>
        {loading ? <Loading /> : (
          <div>
            <Filters
              type={type}
              count={count}
              totalCount={works.length}
              filters={filters}
              actions={actions}
              selectableStatus={type === "articles"}
            />
            {count > 0 && (
              <WorksTable
                type={type}
                works={pagedWorks}
                filters={filters}
                actions={actions}
              />
            )}
            <Pagination count={count} />
          </div>
        )}
      </div>
    )
  }
}

export default WorksTableWrapper
