import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'

import EditWorkForm from './EditWorkForm'
import Loading from '../common/Loading'

class EditWork extends Component {
  componentDidMount() {
    const { actions } = this.props
    actions.getAllWorksAsync()
  }
  render() {
    const { actions, loading, works } = this.props
    return (
      <div>
        <h1 className="title">
          edit work
        </h1>
        <h2 className="subtitle is-6">
          作品情報の編集を行います。
        </h2>
        {loading ? (
          <Loading />
        ) : works && (
          <EditWorkForm
            actions={actions}
            loading={loading}
            onSubmit={actions.editWorkSubmit}
          />
        )}
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

export default connect(mapStateToProps, mapDispatchToProps)(EditWork)
