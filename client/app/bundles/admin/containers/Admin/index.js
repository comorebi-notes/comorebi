import React, { Component } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions/Admin'

import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
import Notification from '../../components/common/Notification'
import pageTitle from '../../utils/pageTitle'

class Admin extends Component {
  render() {
    const { children, actions, currentPath, currentAdmin, notification } = this.props

    return (
      <div className="hero is-fullheight">
        <Helmet title={pageTitle(currentPath)} />
        <Header currentAdmin={currentAdmin} />

        <section className="section" style={{ flexGrow: 1 }}>
          <div className="container">
            { notification.message && (
              <Notification
                notification={notification}
                actions={actions}
              />
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
  currentAdmin: state.admin.currentAdmin,
  notification: state.notification
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin)
