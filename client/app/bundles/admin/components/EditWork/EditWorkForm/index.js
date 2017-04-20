import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, Fields, reduxForm } from 'redux-form'

import InputField from '../../common/form/InputField'
import TextareaField from '../../common/form/TextareaField'
import PublishedDatetimeFields from '../../common/form/PublishedDatetimeFields'
import PublishStatusFields from '../../common/form/PublishStatusFields'
import MultiselectField from '../../common/form/MultiselectField'
import SelectWorkItemField from '../../common/form/SelectWorkItemField'
import SubmitButton from '../../common/form/SubmitButton'
import validate from './validate'
import * as utils from '../../../utils'

class EditWorkForm extends Component {
  render() {
    const { actions, loading, handleSubmit, categories, tags, workItems } = this.props
    const names = {
      status:       ['status'],
      published_at: ['published_date', 'published_time']
    }
    return (
      <form onSubmit={handleSubmit}>
        <Field component={InputField} name="title" label="作品名" />
        <Field component={TextareaField} name="description" label="説明文" />
        <Field
          component={SelectWorkItemField}
          name="item_ids"
          label="登録作品"
          workItems={workItems}
          actions={actions}
        />
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
        <Fields component={PublishStatusFields} names={names.status} label="状態" />
        <Fields component={PublishedDatetimeFields} names={names.published_at} label="公開日" />

        <SubmitButton label="更新する" loading={loading} />
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  const currentPath = state.routing.locationBeforeTransitions.pathname
  const works = state.main.works
  const work = utils.setupWorkForEdit(works, currentPath)
  const initialValues = work ? {
    title:          work.title,
    description:    work.description,
    status:         work.status,
    categories:     work.categories,
    tags:           work.tags,
    published_date: work.published_date,
    published_time: work.published_time,
    item_ids: {
      musics: work.music_ids
    }
  } : {}
  return {
    initialValues,
    categories: state.main.categories,
    tags: state.main.tags,
    workItems: [
      { title: "musics", items: state.main.musics }
    ]
  }
}

EditWorkForm = reduxForm({
  form: 'work',
  validate
})(EditWorkForm)

export default connect(mapStateToProps)(EditWorkForm)
