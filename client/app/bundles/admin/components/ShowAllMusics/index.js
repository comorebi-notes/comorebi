import React, { Component } from 'react'

import WorksTableWrapper from '../WorksTableWrapper'

export default class ShowAllMusics extends Component {
  render() {
    const { actions, loading, musics, filters } = this.props
    const handleLoad = () => actions.getWorksAsync("music")
    return (
      <WorksTableWrapper
        type="musics"
        actions={actions}
        loading={loading.getMusics}
        works={musics}
        filters={filters}
        handleLoad={handleLoad}
      />
    )
  }
}
