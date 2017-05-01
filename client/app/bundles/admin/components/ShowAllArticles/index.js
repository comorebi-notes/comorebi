import React, { Component } from 'react'

import WorksTableWrapper from '../WorksTableWrapper'

class ShowAllArticles extends Component {
  render() {
    const { actions, loading, articles, filters } = this.props
    const handleLoad = () => actions.getAllWorksAsync("article")
    return (
      <WorksTableWrapper
        type="articles"
        actions={actions}
        loading={loading.showAllArticles}
        works={articles}
        filters={filters}
        handleLoad={handleLoad}
      />
    )
  }
}

export default ShowAllArticles
