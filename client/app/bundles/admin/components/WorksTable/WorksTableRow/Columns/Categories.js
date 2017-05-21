import React, { PureComponent } from 'react'

export default class Categories extends PureComponent {
  render () {
    const { categories, handleClick } = this.props
    return (
      <td className="category is-hidden-mobile">
        {categories && categories.map((category) => (
          <span
            type="button"
            className="tag can-click is-info"
            onClick={handleClick}
            key={category}
          >
            {category}
          </span>
        ))}
      </td>
    )
  }
}
