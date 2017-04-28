import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import WorksTableWrapper from '../WorksTableWrapper'
import * as Actions from '../../actions'

class ShowAllArticles extends Component {
  render() {
    const { actions, path, loading, articles, filters } = this.props
    const handleLoad = () => actions.getAllArticlesAsync("showAllArticles")
    return (
      <WorksTableWrapper
        type="articles"
        actions={actions}
        path={path}
        loading={loading}
        works={articles}
        filters={filters}
        handleLoad={handleLoad}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  path: state.routing.locationBeforeTransitions.pathname,
  loading: state.main.loading.showAllArticles,
  articles: state.main.articles,
  filters: state.filters
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowAllArticles)
