import React, { Component } from 'react'

import EditArticleForm from './EditArticleForm'
import Loading from '../common/Loading'

export default class EditArticle extends Component {
  componentDidMount() {
    const { actions } = this.props
    actions.getWorksAsync("article", "editArticle")
  }
  render() {
    const { actions, loading, articles } = this.props
    return (
      <div>
        <h1 className="title">
          Edit Article
        </h1>
        <h2 className="subtitle is-6">
          作品記事の編集を行います。
        </h2>
        {loading.editArticle ? (
          <Loading />
        ) : articles && (
          <EditArticleForm
            actions={actions}
            loading={loading}
            onSubmit={actions.updateWorkSubmit}
          />
        )}
      </div>
    )
  }
}
