import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'

class Counter extends Component {
  render() {
    const { count, actions } = this.props
    return (
      <div>
        <p>カウント: {count}回</p>
        <button onClick={actions.increment}>++</button>
        <button onClick={actions.decrement}>--</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  // currentPath: state.routing.locationBeforeTransitions,
  count: state.main.count
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
