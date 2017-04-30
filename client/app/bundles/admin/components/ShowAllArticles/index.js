import React, { Component } from 'react'

import WorksTableWrapper from '../WorksTableWrapper'

class ShowAllArticles extends Component {
  render() {
    const { actions, loading, articles, filters } = this.props
    const loadingTarget = "showAllArticles"
    const handleLoad = () => actions.getAllArticlesAsync(loadingTarget)
    return (
      <WorksTableWrapper
        type="articles"
        actions={actions}
        loading={loading[loadingTarget]}
        works={articles}
        filters={filters}
        handleLoad={handleLoad}
      />
    )
  }
}

export default ShowAllArticles
