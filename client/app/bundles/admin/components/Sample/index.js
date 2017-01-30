import React, { Component } from 'react'

export default class Counter extends Component {
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
