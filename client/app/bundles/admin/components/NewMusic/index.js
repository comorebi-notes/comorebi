import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'

import NewMusicForm from './NewMusicForm'

class NewMusic extends Component {
  componentDidMount() {
    const { actions } = this.props
    actions.getAllMusicsAsync()
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
          loading={loading.createMusic}
          onSubmit={actions.createMusicSubmit}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.main.loading
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(NewMusic)
