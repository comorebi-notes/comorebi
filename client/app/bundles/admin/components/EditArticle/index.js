import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'

import EditArticleForm from './EditArticleForm'
import Loading from '../common/Loading'

class EditArticle extends Component {
  componentDidMount() {
    const { actions } = this.props
    actions.getAllArticlesAsync("editArticle")
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
            onSubmit={actions.updateArticleSubmit}
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.main.loading,
  articles: state.main.articles
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(EditArticle)
