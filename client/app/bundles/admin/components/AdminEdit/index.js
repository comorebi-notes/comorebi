import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions/Admin'

class AdminEdit extends Component {
  render() {
    const { actions } = this.props
    return (
      <div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentAdmin: state.main.currentAdmin
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

// AdminEdit = reduxForm({ form: 'admin' })(AdminEdit)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: 'admin'
  }
)(AdminEdit))
