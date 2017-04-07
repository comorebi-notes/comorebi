import React, { PureComponent } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'

import menuItems from '../../../constants/menuItems'
import { isActivePath } from '../../../utils'

class Header extends PureComponent {
  render() {
    const { admin, path } = this.props
    const rootPath = "/admin"
    const itemClassName = (url) => classNames(
      "nav-item", "is-tab", "is-hidden-mobile",
      { "is-active": isActivePath(path, url, rootPath) }
    )

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
                {menuItems.map((item) => (
                  <Link
                    to={[rootPath, item.url].join('/')}
                    key={item.label}
                    className={itemClassName(item.url)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="nav-right nav-menu" style={{ flex: 0 }}>
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
