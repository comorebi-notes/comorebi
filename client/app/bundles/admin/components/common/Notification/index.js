import React, { Component } from 'react'

class Notification extends Component {
  render() {
    const { notification } = this.props
    const { notice, alert } = notification
    return (
      <div>
        { notice && (
          <p className="notification is-info">
            { notice }
          </p>
        ) }
        { alert && (
          <p className="notification is-alert">
            { alert }
          </p>
        ) }
      </div>
    )
  }
}

export default Notification
