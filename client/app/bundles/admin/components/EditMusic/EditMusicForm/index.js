import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { browserHistory } from 'react-router'

import InputField from '../../common/form/InputField'
import TextareaField from '../../common/form/TextareaField'
import ModalCard from '../../common/ModalCard'
import Button from '../../common/form/Button'
import validate from '../../NewMusic/NewMusicForm/validate'
import * as utils from '../../../utils'

class EditMusicForm extends Component {
  constructor() {
    super()
    this.state = {
      showModal: false,
      isTouchedModal: false
    }
    this.handleDestroy = this.handleDestroy.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
  }
  handleDestroy() {
    this.props.actions.destroyMusicSubmit()
  }
  toggleModal() {
    this.setState({
      showModal: !this.state.showModal,
      isTouchedModal: true
    })
  }
  render() {
    const { loading, handleSubmit } = this.props
    const { showModal, isTouchedModal } = this.state
    return (
      <form onSubmit={handleSubmit}>
        <Field component={InputField} name="title" label="作品名" />
        <Field component={TextareaField} name="lyrics" label="歌詞" />
        <Field component={InputField} name="sound_file" label="ファイル" />
        <Field component={InputField} name="off_vocal_file" label="オフボーカル" />

        {isTouchedModal && (
          <ModalCard active={showModal} handleClick={this.toggleModal}>
            <ModalCard.Header handleClick={this.toggleModal}>
              作品の消去
            </ModalCard.Header>
            <ModalCard.Body>
              一度消去すると復元できませんが本当によろしいですか？
            </ModalCard.Body>
            <ModalCard.Footer>
              <Button
                color="default"
                label="キャンセル"
                disabled={loading.destroyMusic}
                handleClick={this.toggleModal}
              />
              <Button
                color="is-danger"
                label="消去"
                loading={loading.destroyMusic}
                icon="trash"
                handleClick={this.handleDestroy}
              />
            </ModalCard.Footer>
          </ModalCard>
        )}

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
              handleClick={this.toggleModal}
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
