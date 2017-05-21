import React, { PureComponent } from 'react'

export default class Thumbnail extends PureComponent {
  render () {
    const { images } = this.props
    const image = images ? images[0] : null
    return (
      <td className="thumbnail">
        <figure className="image thumbnail is-1by1">
          {image ? (
            <img src={image.url} alt={image.title} />
          ) : (
            <img src="http://bulma.io/images/placeholders/1280x960.png" alt="dummy" />
          )}
        </figure>
      </td>
    )
  }
}
