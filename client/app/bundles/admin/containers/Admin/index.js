import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions/Admin'

import Counter from '../../components/Sample'

class App extends Component {
  render() {
    const { data, actions } = this.props
    return (
      <Counter {...data.admin} actions={actions} />
    )
  }
}

const mapStateToProps = state => ({
  currentPath: state.routing.locationBeforeTransitions,
  data: state
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  mapStateToProps, mapDispatchToProps
)(App)
