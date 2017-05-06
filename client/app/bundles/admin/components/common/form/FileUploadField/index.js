import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import FormData from 'form-data'

class FileUploadField extends Component {
  constructor() {
    super()
    this.handleOnDrop = this.handleOnDrop.bind(this)
  }
  handleOnDrop(files) {
    const data = new FormData()
    data.append("file", files[0])
    this.props.handleOnDrop(data, this.props.fileType)
  }
  render() {
    const { input, label } = this.props
    return (
      <div>
        <label htmlFor={input.name} className="label">{label}</label>
        <div className="control">
          <Dropzone onDrop={this.handleOnDrop}>
            <p>upload</p>
          </Dropzone>
          <progress className="progress is-info" id="progress" value="0" max="100">0%</progress>
        </div>
      </div>
    )
  }
}

export default FileUploadField
