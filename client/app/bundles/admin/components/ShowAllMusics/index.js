import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Filters from '../common/Filters'
import WorksTable from '../WorksTable'
import Loading from '../common/Loading'
import TabMenu from '../common/TabMenu'
import Pagination from '../common/Pagination'
import menuItems from '../../constants/menuItems'
import * as filter from '../../utils/filter'
import * as Actions from '../../actions'

class ShowAllMusics extends Component {
  componentDidMount() {
    const { actions } = this.props
    actions.clearFilters()
    actions.getAllMusicsAsync()
  }
  render() {
    const { actions, path, loading, musics, filters } = this.props
    const filteredMusics = filter.filteredItems(musics, filters, "musics")
    const pagedMusics = filter.pagedItems(filteredMusics, filters.page)
    const count = filteredMusics.length
    return (
      <div>
        {loading ? <Loading /> : (
          <div>
            <TabMenu
              path={path}
              menuItems={menuItems}
              count={count}
              totalCount={musics.length}
            />
            <Filters
              count={count}
              totalCount={musics.length}
              filters={filters}
              actions={actions}
            />
            {false && <WorksTable
              works={pagedMusics}
              filters={filters}
              actions={actions}
            />}
            <Pagination count={count} />
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  path: state.routing.locationBeforeTransitions.pathname,
  loading: state.main.loading.showAllMusics,
  musics: state.main.musics,
  filters: state.filters
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowAllMusics)
