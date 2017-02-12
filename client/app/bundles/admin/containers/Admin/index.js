import React, { Component } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import pageTitle from '../../utils/pageTitle'

import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
import Notification from '../../components/common/Notification'

class Admin extends Component {
  render() {
    const { children, currentPath, admin, notification } = this.props
    const isNotification = notification.notice || notification.alert

    return (
      <div className="hero is-fullheight">
        <Helmet title={pageTitle(currentPath)} />
        <Header admin={admin} />

        <section className="section" style={{ flexGrow: 1 }}>
          <div className="container">
            { isNotification && (
              <Notification notification={notification} />
            ) }
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
  admin: state.admin.currentAdmin,
  notification: state.admin.notification
})

export default connect(
  mapStateToProps
)(Admin)
