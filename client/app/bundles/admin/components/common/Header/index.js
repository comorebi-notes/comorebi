import React, { Component } from 'react'
import { Link } from 'react-router'

class Header extends Component {
  render() {
    const { admin } = this.props
    return (
      <header className="hero is-primary is-medium">
        <div className="hero-head">
          <nav className="nav">
            <div className="container">
              <div className="nav-left">
                <Link to="/admin" className="nav-item title is-4">
                  comorebi CMS
                </Link>
              </div>
              <div className="nav-right nav-menu">
                <a href="/rails_admin" className="nav-item">
                  rails_admin
                </a>
                <Link to="/admin/edit" className="nav-item">
                  @{admin.name}
                </Link>
                <div className="nav-item">
                  <a href="/admin/logout" data-method="delete" className="button is-primary is-inverted" rel="nofollow">
                    <span>Logout</span>
                    <span className="icon">
                      <i className="fa fa-sign-out" />
                    </span>
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

export default Header
