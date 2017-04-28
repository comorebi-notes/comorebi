import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, Fields, reduxForm } from 'redux-form'
import { browserHistory } from 'react-router'

import InputField from '../../common/form/InputField'
import TextareaField from '../../common/form/TextareaField'
import PublishedDatetimeFields from '../../common/form/PublishedDatetimeFields'
import PublishStatusFields from '../../common/form/PublishStatusFields'
import MultiselectField from '../../common/form/MultiselectField'
import SelectWorkField from '../../common/form/SelectWorkField'
import ModalCard from '../../common/ModalCard'
import Button from '../../common/form/Button'
import validate from '../../NewArticle/NewArticleForm/validate'
import * as utils from '../../../utils'

class EditArticleForm extends Component {
  constructor() {
    super()
    this.state = { showModal: false }
    this.handleDestroy = this.handleDestroy.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
  }
  handleDestroy() {
    this.props.actions.destroyArticleSubmit()
  }
  toggleModal() {
    this.setState({ showModal: !this.state.showModal })
  }
  render() {
    const { actions, loading, handleSubmit, categories, tags, works } = this.props
    const { showModal } = this.state
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
              handleClick={this.toggleModal}
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
              disabled={loading.destroyArticle}
              handleClick={this.toggleModal}
            />
            <Button
              color="is-danger"
              label="消去"
              loading={loading.destroyArticle}
              icon="trash"
              handleClick={this.handleDestroy}
            />
          </ModalCard.Footer>
        </ModalCard>
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
