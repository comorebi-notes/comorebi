import React, { Component } from 'react'

import TabMenu from '../../components/common/TabMenu'
import menuItems from '../../constants/menuItems'

class Works extends Component {
  render() {
    const { children, actions, path, works } = this.props
    return (
      <div>
        <TabMenu path={path} menuItems={menuItems} />
        {children && React.cloneElement(children, {
          key: path,
          actions,
          path,
          ...works
        })}
      </div>
    )
  }
}

export default Works
