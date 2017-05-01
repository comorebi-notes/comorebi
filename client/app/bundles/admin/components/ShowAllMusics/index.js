import React, { Component } from 'react'

import WorksTableWrapper from '../WorksTableWrapper'

class ShowAllMusics extends Component {
  render() {
    const { actions, loading, musics, filters } = this.props
    const handleLoad = () => actions.getAllWorksAsync("music")
    return (
      <WorksTableWrapper
        type="musics"
        actions={actions}
        loading={loading.showAllMusics}
        works={musics}
        filters={filters}
        handleLoad={handleLoad}
      />
    )
  }
}

export default ShowAllMusics
