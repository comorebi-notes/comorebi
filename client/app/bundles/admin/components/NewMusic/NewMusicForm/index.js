import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { browserHistory } from 'react-router'

import InputField from '../../common/form/InputField'
import TextareaField from '../../common/form/TextareaField'
import Button from '../../common/form/Button'
import validate from './validate'

class NewMusicForm extends Component {
  render() {
    const { loading, handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Field component={InputField} name="title" label="作品名" />
        <Field component={TextareaField} name="lyrics" label="歌詞" />
        <Field component={InputField} name="sound_file" label="ファイル" />
        <Field component={InputField} name="off_vocal_file" label="オフボーカル" />

        <div className="field is-grouped with-button">
          <div className="control">
            <Button
              type="submit"
              label="作成"
              loading={loading}
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
