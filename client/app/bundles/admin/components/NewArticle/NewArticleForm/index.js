import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, Fields, reduxForm } from 'redux-form'
import { browserHistory } from 'react-router'

import InputField from '../../form/InputField'
import TextareaField from '../../form/TextareaField'
import PublishedDatetimeFields from '../../form/PublishedDatetimeFields'
import PublishStatusFields from '../../form/PublishStatusFields'
import MultiselectField from '../../form/MultiselectField'
import SelectWorkField from '../../form/SelectWorkField'
import Button from '../../form/Button'
import validate from './validate'

class NewArticleForm extends Component {
  render() {
    const { actions, loading, handleSubmit, categories, tags, works } = this.props
    const names = {
      status:       ['status'],
      published_at: ['published_date', 'published_time']
    }
    return (
      <form onSubmit={handleSubmit}>
        <Field component={InputField} name="title" label="作品名" />
        <Field component={TextareaField} name="description" label="説明文" />
        <Field
          component={SelectWorkField}
          name="work_ids"
          label="登録作品"
          works={works}
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
    status: "private",
    work_ids: {}
  },
  categories: state.main.categories,
  tags: state.main.tags,
  works: [
    { title: "musics", items: state.main.musics }
  ]
})

NewArticleForm = reduxForm({
  form: 'article',
  validate
})(NewArticleForm)

export default connect(mapStateToProps)(NewArticleForm)
