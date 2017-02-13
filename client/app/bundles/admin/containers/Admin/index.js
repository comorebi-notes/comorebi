import React, { Component } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import Notifications from 'react-notification-system-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions/Admin'

import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
import pageTitle from '../../utils/pageTitle'

class Admin extends Component {
  componentDidMount() {
    const { actions, initialNotification } = this.props
    if (initialNotification.message) {
      actions.setNotifications(initialNotification)
    }
  }

  render() {
    const { children, actions, currentPath, currentAdmin, notifications } = this.props
    const options = { message: 'Now you can see how easy it is to use notifications in React!' }
    const handleClick = () => actions.setNotifications(options)

    return (
      <div className="hero is-fullheight">
        <Helmet title={pageTitle(currentPath)} />
        <Notifications notifications={notifications} />

        <Header currentAdmin={currentAdmin} />

        <section className="section" style={{ flexGrow: 1 }}>
          <div className="container">
            <button onClick={handleClick} className="button is-info">
              notification!
            </button>
            { children }
          </div>
        </section>

        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentPath: state.routing.locationBeforeTransitions.pathname,
  currentAdmin: state.main.currentAdmin,
  initialNotification: state.main.initialNotification,
  notifications: state.notifications
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin)
