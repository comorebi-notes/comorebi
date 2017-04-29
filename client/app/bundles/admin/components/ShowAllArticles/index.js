import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import WorksTableWrapper from '../WorksTableWrapper'
import * as Actions from '../../actions'

class ShowAllArticles extends Component {
  render() {
    const { actions, loading, articles, filters } = this.props
    const handleLoad = () => actions.getAllArticlesAsync("showAllArticles")
    return (
      <WorksTableWrapper
        type="articles"
        actions={actions}
        loading={loading}
        works={articles}
        filters={filters}
        handleLoad={handleLoad}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.main.loading.showAllArticles,
  articles: state.main.articles,
  filters: state.filters
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowAllArticles)
