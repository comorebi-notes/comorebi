import React, { Component } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import Notifications from 'react-notification-system-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'

import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
import pageTitle from '../../utils/pageTitle'

class Admin extends Component {
  componentDidMount() {
    const { actions, initialNotification } = this.props
    if (initialNotification.message) {
      actions.setNotifications(Object.assign({ noTitle: true }, initialNotification))
      actions.clearInitialNotification()
    }
  }

  render() {
    const { children, currentPath, currentAdmin, notifications } = this.props

    return (
      <div className="hero is-fullheight">
        <Helmet title={pageTitle(currentPath)} />
        <Notifications notifications={notifications} />

        <Header currentAdmin={currentAdmin} />
        <section className="section" style={{ flexGrow: 1 }}>
          <div className="container">
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
