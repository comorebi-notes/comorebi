import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class AdminEditForm extends Component {
  render() {
    return (
      <form>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email" />
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default reduxForm({ form: 'admin' })(AdminEditForm)

// export default AdminEditForm
