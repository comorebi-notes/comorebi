import React, { PureComponent } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'

import Icon from '../Icon'
import * as utils from '../../../utils'

export default class TabMenu extends PureComponent {
  render() {
    const { path, menuItems } = this.props
    const rootPath = "/admin"
    const itemClassName = (url) => (
      classNames({ "is-active": utils.isActivePath(path, url, rootPath) })
    )
    return (
      <div className="tab-menu">
        <div className="tabs is-boxed">
          <ul>
            {menuItems.map((item) => (
              <li key={item.label} className={itemClassName(item.url)}>
                <Link to={[rootPath, item.url].join('/')}>
                  <Icon icon={item.icon} size="small" />
                  <span className="is-hidden-mobile">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
