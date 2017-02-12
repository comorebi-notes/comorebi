import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions/Admin'

class Counter extends Component {
  render() {
    const { data, actions } = this.props
    return (
      <div>
        <p>カウント: {data.count}回</p>
        <button onClick={actions.increment}>++</button>
        <button onClick={actions.decrement}>--</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  // currentPath: state.routing.locationBeforeTransitions,
  data: state.admin
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
