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
import DestroyModal from './DestroyModal'
import validate from '../../NewArticle/NewArticleForm/validate'
import * as utils from '../../../utils'

class EditArticleForm extends Component {
  render() {
    const { actions, loading, handleSubmit, categories, tags, works } = this.props
    const names = {
      status:       ['status'],
      published_at: ['published_date', 'published_time']
    }
    return (
      <form onSubmit={handleSubmit}>
        <DestroyModal
          loading={loading.destroyArticle}
          handleCancel={actions.toggleModal}
          handleDestroy={actions.destroyWorkSubmit}
        />

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
              label="更新"
              loading={loading.updateArticle}
              icon="upload"
            />
          </div>
          <div className="control">
            <Button
              color="is-danger"
              label="消去"
              disabled={loading.updateArticle}
              icon="trash"
              handleClick={actions.toggleModal}
            />
          </div>
          <div className="control">
            <Button
              color="default"
              label="キャンセル"
              disabled={loading.updateArticle}
              handleClick={() => browserHistory.push("/admin")}
            />
          </div>
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  const currentPath = state.routing.locationBeforeTransitions.pathname
  const articles = state.main.articles
  const article = utils.setupArticleForEdit(articles, currentPath)
  const initialValues = article ? {
    title:          article.title,
    description:    article.description,
    status:         article.status,
    categories:     article.categories,
    tags:           article.tags,
    published_date: article.published_date,
    published_time: article.published_time,
    work_ids: {
      musics: article.music_ids
    }
  } : {}
  return {
    initialValues,
    categories: state.main.categories,
    tags: state.main.tags,
    works: [
      { title: "musics", items: state.main.musics }
    ]
  }
}

EditArticleForm = reduxForm({
  form: 'article',
  validate
})(EditArticleForm)

export default connect(mapStateToProps)(EditArticleForm)
