import React, { Component } from 'react'

import WorksTableWrapper from '../WorksTableWrapper'

class ShowAllMusics extends Component {
  render() {
    const { actions, loading, musics, filters } = this.props
    const loadingTarget = "showAllMusics"
    const handleLoad = () => actions.getAllMusicsAsync(loadingTarget)
    return (
      <WorksTableWrapper
        type="musics"
        actions={actions}
        loading={loading[loadingTarget]}
        works={musics}
        filters={filters}
        handleLoad={handleLoad}
      />
    )
  }
}

export default ShowAllMusics
