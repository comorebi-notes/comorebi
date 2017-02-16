import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class EditAdminForm extends Component {
  render() {
    const { actions, loading, currentAdmin, handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="label">アカウント名</label>
        <p className="control">
          <Field name="name" component="input" type="text" className="input" />
        </p>

        <label htmlFor="email" className="label">メールアドレス</label>
        <p className="control">
          <Field name="email" component="input" type="text" className="input" />
        </p>

        <label htmlFor="password" className="label">パスワード</label>
        <p className="control">
          <Field name="password" component="input" type="password" className="input" />
          <span className="help">
            空欄にした場合は変更されません。
          </span>
        </p>

        <label htmlFor="password_confirmation" className="label">パスワード (確認)</label>
        <p className="control">
          <Field name="password_confirmation" component="input" type="password" className="input" />
        </p>

        <label htmlFor="current_password" className="label">現在のパスワード</label>
        <p className="control">
          <Field name="current_password" component="input" type="password" className="input" />
        </p>

        <p className="control">
          <button type="submit" className={`button is-primary${loading ? ' is-loading' : ''}`}>更新</button>
        </p>
      </form>
    )
  }
}

export default reduxForm({
  form: 'admin'
})(EditAdminForm)
