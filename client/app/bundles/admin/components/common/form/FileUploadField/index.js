import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import FormData from 'form-data'

import Button from '../Button'

class FileUploadField extends Component {
  constructor() {
    super()
    this.handleOnDrop = this.handleOnDrop.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  handleOnDrop(files) {
    const { fileType, input: { name } } = this.props
    const data = new FormData()
    data.append("file", files[0])
    this.props.handleOnDrop(data, fileType, name)
  }
  handleDelete() {
    this.props.input.onChange({})
  }
  render() {
    const { input, label, loading, fileType } = this.props
    const mimeTypes = {
      image: "image/jpeg, image/png, image/gif",
      sound: "audio/mp3"
    }
    return (
      <div>
        <label htmlFor={input.name} className="label">{label}</label>
        <div className="control">
          {input.value.url ? (
            <article className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <div className="content">
                      <strong>{decodeURI(input.value.url.split("/").pop())}</strong>
                    </div>
                  </div>
                  <div className="media-right">
                    <button
                      type="button"
                      className="delete"
                      onClick={this.handleDelete}
                    />
                  </div>
                </div>
              </div>
            </article>
          ) : (
            <Dropzone onDrop={this.handleOnDrop} className="dropzone">
              <Button
                color="default"
                icon="cloud-upload"
                label="ファイルをアップロード"
                disabled={loading}
              />
            </Dropzone>
          )}
          {loading && (
            <div className="dropzone-progress">
              <progress
                className="progress is-info"
                id={`progress-bar-${input.name}`}
                accept={false && mimeTypes[fileType]}
                value="0"
                max="100"
              />
              <span id={`progress-text-${input.name}`} />
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default FileUploadField
