import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'

import NewWorkForm from './NewWorkForm'

class NewWork extends Component {
  componentDidMount() {
    const { actions } = this.props
    actions.getAllWorksAsync("newWork")
  }
  render() {
    const { actions, loading } = this.props
    return (
      <div>
        <h1 className="title">
          new work
        </h1>
        <h2 className="subtitle is-6">
          作品を新規に作成します。
        </h2>
        <NewWorkForm
          actions={actions}
          loading={loading.createWork}
          onSubmit={actions.createWorkSubmit}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.main.loading,
  works: state.main.works
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(NewWork)
