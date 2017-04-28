import React, { PureComponent } from 'react'
import Highlighter from 'react-highlight-words'

import * as filter from '../../../../utils/filter'

class Lyrics extends PureComponent {
  render () {
    const { lyrics, filters } = this.props
    return (
      <td className="lyrics">
        {lyrics && filters && filters.words ? (
          <Highlighter
            searchWords={filter.splitFilteringWords(filters.words)}
            textToHighlight={lyrics}
          />
        ) : lyrics}
      </td>
    )
  }
}

export default Lyrics
