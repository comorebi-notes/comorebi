import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import InputField from '../../common/InputField'

class EditAdminForm extends Component {
  render() {
    const { loading, handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Field component={InputField} name="name" label="アカウント名" />
        <Field component={InputField} name="email" label="メールアドレス" />
        <Field component={InputField} name="password" label="パスワード" type="password">
          <span className="help">空欄にした場合は変更されません。</span>
        </Field>
        <Field component={InputField} name="password_confirmation" label="パスワード (確認)" type="password" />
        <Field component={InputField} name="current_password" label="現在のパスワード" type="password" />

        <p className="control with-button">
          <button type="submit" className={`button is-primary${loading ? ' is-loading' : ''}`}>更新</button>
        </p>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  const currentAdmin = state.main.currentAdmin
  return {
    initialValues: {
      name: currentAdmin.name,
      email: currentAdmin.email
    }
  }
}

EditAdminForm = reduxForm({
  form: 'admin'
})(EditAdminForm)

export default connect(
  mapStateToProps
)(EditAdminForm)
