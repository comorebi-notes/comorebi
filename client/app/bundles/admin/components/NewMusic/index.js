import React, { Component } from 'react'

import NewMusicForm from './NewMusicForm'

class NewMusic extends Component {
  componentDidMount() {
    const { actions } = this.props
    actions.getWorksAsync("music", "createMusic")
  }
  render() {
    const { actions, loading } = this.props
    return (
      <div>
        <h1 className="title">
          New Music
        </h1>
        <h2 className="subtitle is-6">
          音楽作品を新規に登録します。
        </h2>
        <NewMusicForm
          actions={actions}
          loading={loading}
          onSubmit={actions.createWorkSubmit}
        />
      </div>
    )
  }
}

export default NewMusic
