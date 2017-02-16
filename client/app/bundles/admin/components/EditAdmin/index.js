import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'

import EditAdminForm from './EditAdminForm'

class EditAdmin extends Component {
  render() {
    const { actions, loading, currentAdmin } = this.props
    return (
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <h1 className="title">
            管理者アカウントの編集
          </h1>
          <h2 className="subtitle is-6">
            アカウント情報の編集を行います。
          </h2>
          <EditAdminForm
            actions={actions}
            loading={loading}
            currentAdmin={currentAdmin}
            onSubmit={actions.editAdminSubmit}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.main.loading,
  currentAdmin: state.main.currentAdmin
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditAdmin)
