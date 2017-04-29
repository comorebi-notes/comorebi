import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import WorksTableWrapper from '../WorksTableWrapper'
import * as Actions from '../../actions'

class ShowAllMusics extends Component {
  render() {
    const { actions, loading, musics, filters } = this.props
    return (
      <WorksTableWrapper
        type="musics"
        actions={actions}
        loading={loading}
        works={musics}
        filters={filters}
        handleLoad={actions.getAllMusicsAsync}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.main.loading.showAllMusics,
  musics: state.main.musics,
  filters: state.filters
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowAllMusics)
