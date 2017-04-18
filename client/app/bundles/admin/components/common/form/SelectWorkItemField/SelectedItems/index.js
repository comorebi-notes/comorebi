import React, { Component } from 'react'

import SelectedItem from '../SelectedItem'
import * as utils from '../../../../../utils'

class SelectedItems extends Component {
  render () {
    const { items, ids, renderSectionTitle, handleDelete } = this.props
    return (
      <div className="selected-item control">
        {ids && (
          Object.keys(ids).map((type) => (
            ids[type].length > 0 && (
              <div key={type}>
                {renderSectionTitle(utils.targetSection(items, type))}
                {ids[type].map((id) =>
                  <SelectedItem
                    item={utils.selectedItem(items, type, id)}
                    type={type}
                    key={id}
                    handleDelete={handleDelete}
                    showDeleteButton
                  />
                )}
              </div>
            )
          ))
        )}
      </div>
    )
  }
}

export default SelectedItems
