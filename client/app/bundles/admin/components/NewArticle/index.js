import React, { Component } from 'react'

import NewArticleForm from './NewArticleForm'

class NewArticle extends Component {
  componentDidMount() {
    const { actions } = this.props
    actions.getAllArticlesAsync("newArticle")
  }
  render() {
    const { actions, loading } = this.props
    return (
      <div>
        <h1 className="title">
          New Article
        </h1>
        <h2 className="subtitle is-6">
          作品記事を新規に登録します。
        </h2>
        <NewArticleForm
          actions={actions}
          loading={loading.createArticle}
          onSubmit={actions.createArticleSubmit}
        />
      </div>
    )
  }
}

export default NewArticle
