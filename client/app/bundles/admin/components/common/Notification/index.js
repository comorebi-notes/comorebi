import React, { Component } from 'react'

class Notification extends Component {
  componentDidMount() {
    const { actions } = this.props
    actions.setNotification(true)
  }

  render() {
    const { actions, notification } = this.props
    const { message, type, show } = notification
    const notificationClass = {
      notice: 'is-info',
      alert: 'is-alert'
    }

    return (
      <div>
        { show && (
          <p className={`notification ${notificationClass[type]}`}>
            <button className="delete" onClick={() => actions.setNotification(false)} />
            { message }
          </p>
        ) }
      </div>
    )
  }
}

export default Notification
