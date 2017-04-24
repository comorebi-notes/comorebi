import React, { PureComponent } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'

import WorksCount from '../WorksCount'
import Icon from '../Icon'
import * as utils from '../../../utils'

class TabMenu extends PureComponent {
  render() {
    const { path, menuItems, count, totalCount } = this.props
    const rootPath = "/admin"
    const itemClassName = (url) => (
      classNames({ "is-active": utils.isActivePath(path, url, rootPath) })
    )
    return (
      <div className="tab-menu">
        <WorksCount count={count} totalCount={totalCount} />
        <div className="tabs is-boxed">
          <ul>
            {menuItems.map((item) => (
              <li key={item.label} className={itemClassName(item.url)}>
                <Link to={[rootPath, item.url].join('/')}>
                  <Icon icon={item.icon} size="small" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default TabMenu
