import React, { PureComponent } from 'react'
import { Link } from 'react-router'

import Icon from '../Icon'

export default class Header extends PureComponent {
  render() {
    const { admin } = this.props
    const rootPath = "/admin"
    return (
      <header className="hero is-primary is-medium">
        <div className="hero-head">
          <nav className="nav">
            <div className="container">
              <div className="nav-left">
                <Link to={rootPath} className="nav-item">
                  <h1 className="title is-4">
                    comorebi CMS
                  </h1>
                </Link>
              </div>
              <div className="nav-right nav-menu" style={{ flex: 0 }}>
                <a href="/rails_admin" className="nav-item" target="_blank" rel="noopener noreferrer">
                  rails_admin
                </a>
                <Link to="/admin/edit" className="nav-item">
                  @{admin.name}
                </Link>
                <div className="nav-item">
                  <a href="/admin/logout" data-method="delete" className="button is-primary is-inverted" rel="nofollow">
                    <span>Logout</span>
                    <Icon icon="sign-out" />
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    )
  }
}
