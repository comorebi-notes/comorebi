import React, { Component } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import Notifications from 'react-notification-system-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'

import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
import SideMenu from '../../components/common/SideMenu'
import pageTitle from '../../constants/pageTitle'

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
        <Header admin={currentAdmin} />
        <section className="section" style={{ flexGrow: 1 }}>
          <div className="container">
            <div className="columns">
              <div className="column is-3">
                <SideMenu path={currentPath} />
              </div>
              <div className="column">
                <ReactCSSTransitionGroup
                  component="div"
                  className="transition-container"
                  transitionName="admin"
                  transitionEnterTimeout={300}
                  transitionLeaveTimeout={300}
                >
                  {children && React.cloneElement(children, { key: currentPath })}
                </ReactCSSTransitionGroup>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentPath: state.routing.locationBeforeTransitions.pathname,
  currentAdmin: state.main.currentAdmin,
  initialNotification: state.main.initialNotification,
  notifications: state.notifications
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
