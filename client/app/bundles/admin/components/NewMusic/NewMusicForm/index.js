import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { browserHistory } from 'react-router'

import InputField from '../../common/form/InputField'
import TextareaField from '../../common/form/TextareaField'
import Button from '../../common/form/Button'
import validate from './validate'

class NewMusicForm extends Component {
  render() {
    const { actions, loading, handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Field component={InputField} name="title" label="作品名" />
        <Field component={TextareaField} name="lyrics" label="lyrics" />

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
              handleClick={() => browserHistory.push("/admin")}
            />
          </div>
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  initialValues: {
    status: "drafted",
    item_ids: {}
  },
  categories: state.main.categories,
  tags: state.main.tags,
  workItems: [
    { title: "musics", items: state.main.musics }
  ]
})

NewMusicForm = reduxForm({
  form: 'music',
  validate
})(NewMusicForm)

export default connect(mapStateToProps)(NewMusicForm)
