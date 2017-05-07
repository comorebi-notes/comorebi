import React, { Component } from 'react'

import SelectedWork from '../SelectedWork'
import * as utils from '../../../../../utils'

class SelectedWorks extends Component {
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
                  <SelectedWork
                    item={utils.selectedWork(items, type, id)}
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

export default SelectedWorks
