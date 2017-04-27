import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import WorksTableWrapper from '../WorksTableWrapper'
import * as Actions from '../../actions'

class ShowAllWorks extends Component {
  render() {
    const { actions, path, loading, works, filters } = this.props
    const handleLoad = () => actions.getAllWorksAsync("showAllWorks")
    return (
      <WorksTableWrapper
        type="works"
        actions={actions}
        path={path}
        loading={loading}
        works={works}
        filters={filters}
        handleLoad={handleLoad}
      />
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
