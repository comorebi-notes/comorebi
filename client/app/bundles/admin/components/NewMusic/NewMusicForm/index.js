import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { browserHistory } from 'react-router'

import InputField from '../../common/form/InputField'
import TextareaField from '../../common/form/TextareaField'
import FileUploadField from '../../common/form/FileUploadField'
import Button from '../../common/form/Button'
import validate from './validate'

class NewMusicForm extends Component {
  render() {
    const { actions, loading, handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Field component={InputField} name="title" label="作品名" />
        <Field component={TextareaField} name="lyrics" label="歌詞" />
        <Field
          component={FileUploadField}
          name="sound_file"
          label="ファイル"
          fileType="sound"
          loading={loading.uploadSoundFile}
          handleOnDrop={actions.uploadFile}
        />
        <Field
          component={FileUploadField}
          name="off_vocal_file"
          label="オフボーカル"
          fileType="sound"
          loading={loading.uploadOffVocalFile}
          handleOnDrop={actions.uploadFile}
        />

        <div className="field is-grouped with-button">
          <div className="control">
            <Button
              type="submit"
              label="作成"
              loading={loading.createMusic}
              disabled={loading.uploadSoundFile || loading.uploadOffVocalFile}
              icon="plus-circle"
            />
          </div>
          <div className="control">
            <Button
              color="default"
              label="キャンセル"
              disabled={loading}
              handleClick={() => browserHistory.push("/admin/musics")}
            />
          </div>
        </div>
      </form>
    )
  }
}

NewMusicForm = reduxForm({
  form: 'music',
  validate
})(NewMusicForm)

export default NewMusicForm
