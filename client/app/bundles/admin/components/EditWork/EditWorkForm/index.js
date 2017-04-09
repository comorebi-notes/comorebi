import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, Fields, reduxForm } from 'redux-form'

import InputField from '../../common/form/InputField'
import SelectDatetimeFields from '../../common/form/SelectDatetimeFields'
import SubmitButton from '../../common/form/SubmitButton'
import validate from './validate'
import * as utils from '../../../utils'

class EditWorkForm extends Component {
  render() {
    const { loading, handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Field component={InputField} name="title" label="作品名" />
        <Field component={InputField} name="description" label="説明文" type="textarea" />
        <Fields
          component={SelectDatetimeFields}
          names={["published_date", "published_time"]}
          label="公開日"
        />

        <SubmitButton label="更新" loading={loading} />
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  const currentPath = state.routing.locationBeforeTransitions.pathname
  const works = state.main.works
  const work = utils.setupWorkForEdit(works, currentPath)
  return { initialValues: work }
}

EditWorkForm = reduxForm({
  form: 'work',
  validate
})(EditWorkForm)

export default connect(mapStateToProps)(EditWorkForm)
