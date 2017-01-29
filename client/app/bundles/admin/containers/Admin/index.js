import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions/Admin'

import Counter from '../../components/Sample'

class App extends Component {
  constructor(props) {
    super(props)
    // this.state = { data: {} }
  }

  render() {
    const { data, actions } = this.props
    return (
      <Counter {...data} actions={actions} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
