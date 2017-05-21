import React, { Component } from 'react'

import EditMusicForm from './EditMusicForm'
import Loading from '../common/Loading'

export default class EditMusic extends Component {
  componentDidMount() {
    const { actions } = this.props
    actions.getWorksAsync("music", "editMusic")
  }
  render() {
    const { actions, loading, musics } = this.props
    return (
      <div>
        <h1 className="title">
          Edit Music
        </h1>
        <h2 className="subtitle is-6">
          音楽作品の編集を行います。
        </h2>
        {loading.editMusic ? (
          <Loading />
        ) : musics && (
          <EditMusicForm
            actions={actions}
            loading={loading}
            onSubmit={actions.updateWorkSubmit}
          />
        )}
      </div>
    )
  }
}
