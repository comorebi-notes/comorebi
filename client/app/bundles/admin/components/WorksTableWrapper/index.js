import React, { Component } from 'react'

import Filters from '../common/Filters'
import WorksTable from '../WorksTable'
import Loading from '../common/Loading'
import TabMenu from '../common/TabMenu'
import Pagination from '../common/Pagination'
import menuItems from '../../constants/menuItems'
import * as filter from '../../utils/filter'

class WorksTableWrapper extends Component {
  componentDidMount() {
    const { actions, handleLoad } = this.props
    actions.clearFilters()
    handleLoad()
  }
  render() {
    const { actions, type, path, loading, works, filters } = this.props
    const filteredWorks = filter.filteredItems(works, filters, type)
    const pagedWorks = filter.pagedItems(filteredWorks, filters.page)
    const count = filteredWorks.length
    return (
      <div>
        {loading ? <Loading /> : (
          <div>
            <TabMenu
              path={path}
              menuItems={menuItems}
              count={count}
              totalCount={works.length}
            />
            <Filters
              count={count}
              totalCount={works.length}
              filters={filters}
              actions={actions}
              selectableStatus={type === "works"}
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
