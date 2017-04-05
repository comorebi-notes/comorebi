import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import InputField from '../../common/form/InputField'
import SubmitButton from '../../common/form/SubmitButton'
import validate from './validate'

class EditAdminForm extends Component {
  render() {
    const { loading, handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Field component={InputField} name="name" label="アカウント名" />
        <Field component={InputField} name="email" label="メールアドレス" />
        <Field component={InputField} name="password" label="パスワード" type="password">
          <p className="help">空欄にした場合は変更されません。</p>
        </Field>
        <Field component={InputField} name="password_confirmation" label="パスワード (確認)" type="password" />
        <Field component={InputField} name="current_password" label="現在のパスワード" type="password" />

        <SubmitButton label="更新" loading={loading} />
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
  form: 'admin',
  validate
})(EditAdminForm)

export default connect(mapStateToProps)(EditAdminForm)
