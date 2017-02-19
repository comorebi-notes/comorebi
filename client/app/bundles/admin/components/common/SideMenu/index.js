import React, { Component } from 'react'
import { Link } from 'react-router'

import menuItems from '../../../constants/menuItems'
import { isActivePath } from '../../../utils'

class SideMenu extends Component {
  render() {
    const { path } = this.props
    const renderMenuItems = (items, urlPrefix) => (
      items.map((item) => {
        const url = urlPrefix ? urlPrefix + item.url : item.url
        return (
          <li key={item.label}>
            <Link to={url} className={isActivePath(path, url)}>
              {item.label}
            </Link>
            {item.subMenuItems && (
              <ul>
                {renderMenuItems(item.subMenuItems, url)}
              </ul>
            )}
          </li>
        )
      })
    )

    return (
      <aside className="menu">
        <p className="menu-label">
          Works
        </p>
        <ul className="menu-list">
          {renderMenuItems(menuItems, '/admin')}
        </ul>
        <p className="menu-label">
          Settings
        </p>
        <ul className="menu-list">
          <li>
            <Link to="/admin/edit" className={isActivePath(path, "/admin/edit")}>
              Accounts
            </Link>
          </li>
        </ul>
      </aside>
    )
  }
}

export default SideMenu
