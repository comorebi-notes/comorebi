import React, { PureComponent } from 'react'
import Highlighter from 'react-highlight-words'

import * as filter from '../../../../utils/filter'

export default class Title extends PureComponent {
  render () {
    const { title, filters } = this.props
    return (
      <td className="works-title">
        {filters && filters.words ? (
          <Highlighter
            searchWords={filter.splitFilteringWords(filters.words)}
            textToHighlight={title}
          />
        ) : title}
      </td>
    )
  }
}
