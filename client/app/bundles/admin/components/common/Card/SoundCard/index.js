import React, { Component } from 'react'
import ReactAudioPlayer from 'react-audio-player'

export default class SoundCard extends Component {
  render() {
    const { url, handleDelete } = this.props
    return (
      <article className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <div className="content">
                <strong>{decodeURI(url.split("/").pop())}</strong>
              </div>
            </div>
            <div className="media-right">
              <button
                type="button"
                className="delete"
                onClick={handleDelete}
              />
            </div>
          </div>
          <ReactAudioPlayer src={url} />
        </div>
      </article>
    )
  }
}
