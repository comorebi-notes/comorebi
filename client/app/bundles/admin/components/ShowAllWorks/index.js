import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Filters from '../common/Filters'
import WorksTable from '../WorksTable'
import Loading from '../common/Loading'
import TabMenu from '../common/TabMenu'
import Pagination from '../common/Pagination'
import menuItems from '../../constants/menuItems'
import * as utils from '../../utils'
import * as Actions from '../../actions'

class ShowAllWorks extends Component {
  componentDidMount() {
    const { actions } = this.props
    actions.clearFilters()
    actions.getAllWorksAsync("showAllWorks")
  }
  render() {
    const { actions, path, loading, works, filters } = this.props
    const filteredWorks = utils.filterWorks(works, filters)
    const pagedWorks = utils.pagingWorks(filteredWorks, filters.page)
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
            />
            <WorksTable
              works={pagedWorks}
              filters={filters}
              actions={actions}
            />
            <Pagination count={count} />
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  path: state.routing.locationBeforeTransitions.pathname,
  loading: state.main.loading.showAllWorks,
  works: state.main.works,
  filters: state.filters
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowAllWorks)
