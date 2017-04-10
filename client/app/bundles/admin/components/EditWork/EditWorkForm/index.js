import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, Fields, reduxForm } from 'redux-form'

import InputField from '../../common/form/InputField'
import PublishedDatetimeFields from '../../common/form/PublishedDatetimeFields'
import PublishStatusFields from '../../common/form/PublishStatusFields'
import MultiselectField from '../../common/form/MultiselectField'
import SubmitButton from '../../common/form/SubmitButton'
import validate from './validate'
import * as utils from '../../../utils'

class EditWorkForm extends Component {
  render() {
    const { actions, loading, handleSubmit, categories, tags } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Field  component={InputField} name="title" label="作品名" />
        <Field  component={InputField} name="description" label="説明文" type="textarea" />
        <Fields component={PublishStatusFields} names={["status"]} label="状態" />
        <Fields component={PublishedDatetimeFields} names={["published_date", "published_time"]} label="公開日" />
        <Field
          component={MultiselectField}
          name="categories"
          label="カテゴリー"
          data={categories}
          onCreate={actions.addTag}
        />
        <Field
          component={MultiselectField}
          name="tags"
          label="タグ"
          data={tags}
          onCreate={actions.addTag}
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
  return {
    initialValues: work,
    categories: state.main.categories,
    tags: state.main.tags
  }
}

EditWorkForm = reduxForm({
  form: 'work',
  validate
})(EditWorkForm)

export default connect(mapStateToProps)(EditWorkForm)
