import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'

import EditWorkForm from './EditWorkForm'

class EditWork extends Component {
  render() {
    const { actions, loading } = this.props
    return (
      <div>
        <h1 className="title">
          new work
        </h1>
        <h2 className="subtitle is-6">
          作品情報の編集を行います。
        </h2>
        <EditWorkForm
          actions={actions}
          loading={loading}
          onSubmit={actions.editWorkSubmit}
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

export default connect(mapStateToProps, mapDispatchToProps)(EditWork)
