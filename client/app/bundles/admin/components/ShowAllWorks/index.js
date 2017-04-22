import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'

import WorksUtilBar from '../common/WorksUtilBar'
import WorksTable from './WorksTable'
import Loading from '../common/Loading'
import * as utils from '../../utils'

class ShowAllWorks extends Component {
  componentDidMount() {
    const { actions } = this.props
    actions.getAllWorksAsync("showAllWorks")
  }
  render() {
    const { actions, loading, works, filters } = this.props
    return (
      <div>
        {loading ? <Loading /> : (
          <div>
            <WorksUtilBar
              count={works.length}
              filters={filters}
              handleInput={actions.changeFilterWords}
            />
            <WorksTable works={utils.filterWorks(works, filters)} />
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.main.loading.showAllWorks,
  works: state.main.works,
  filters: state.main.filters
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowAllWorks)
