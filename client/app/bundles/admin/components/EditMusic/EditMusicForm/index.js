import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { browserHistory } from 'react-router'

import InputField from '../../common/form/InputField'
import TextareaField from '../../common/form/TextareaField'
import Button from '../../common/form/Button'
import DestroyModal from './DestroyModal'
import validate from '../../NewMusic/NewMusicForm/validate'
import * as utils from '../../../utils'

class EditMusicForm extends Component {
  render() {
    const { actions, loading, handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <DestroyModal
          loading={loading.destroyMusic}
          handleCancel={actions.toggleModal}
          handleDestroy={actions.destroyMusicSubmit}
        />

        <Field component={InputField} name="title" label="作品名" />
        <Field component={TextareaField} name="lyrics" label="歌詞" />
        <Field component={InputField} name="sound_file" label="ファイル" />
        <Field component={InputField} name="off_vocal_file" label="オフボーカル" />

        <div className="field is-grouped with-button">
          <div className="control">
            <Button
              type="submit"
              label="更新"
              loading={loading.updateMusic}
              icon="upload"
            />
          </div>
          <div className="control">
            <Button
              color="is-danger"
              label="消去"
              disabled={loading.updateMusic}
              icon="trash"
              handleClick={actions.toggleModal}
            />
          </div>
          <div className="control">
            <Button
              color="default"
              label="キャンセル"
              disabled={loading.updateMusic}
              handleClick={() => browserHistory.push("/admin/musics")}
            />
          </div>
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  const currentPath = state.routing.locationBeforeTransitions.pathname
  const musics = state.main.musics
  const music = utils.findWork(musics, utils.getId(currentPath))
  return {
    initialValues: music ? {
      title:          music.title,
      lyrics:         music.lyrics,
      sound_file:     music.sound_file,
      off_vocal_file: music.off_vocal_file
    } : {}
  }
}

EditMusicForm = reduxForm({
  form: 'music',
  validate
})(EditMusicForm)

export default connect(mapStateToProps)(EditMusicForm)