import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import FormData from 'form-data'
import classNames from 'classnames'

import SoundCard from '../../Card/SoundCard'
import Button from '../Button'
import ErrorField from '../ErrorField'

export default class FileUploadField extends Component {
  constructor() {
    super()
    this.handleOnDrop = this.handleOnDrop.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  handleOnDrop(files) {
    const { fileType, input: { name } } = this.props
    const data = new FormData()
    data.append("file", files[0])
    this.props.input.onChange({})
    this.props.handleOnDrop(data, fileType, name)
  }
  handleDelete() {
    this.props.input.onChange({})
  }
  render() {
    const { input, label, loading, fileType, meta: { touched, error } } = this.props
    const isError = touched && error
    const mimeTypes = {
      image: "image/jpeg, image/png, image/gif",
      sound: "audio/mp3"
    }
    return (
      <div className={classNames({ 'is-danger': isError })}>
        <label htmlFor={input.name} className="label">{label}</label>
        <div className="control">
          {input.value.url ? (
            <SoundCard url={input.value.url} handleDelete={this.handleDelete} />
          ) : (
            <Dropzone onDrop={this.handleOnDrop} accept={mimeTypes[fileType]} className="dropzone">
              <Button
                color="default"
                icon="cloud-upload"
                label="ファイルをアップロード"
                disabled={loading}
              />
            </Dropzone>
          )}
          {isError && <ErrorField error={error} className="flat-error-field" />}
          {loading && (
            <div className="dropzone-progress">
              <progress
                className="progress is-info"
                id={`progress-bar-${input.name}`}
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
