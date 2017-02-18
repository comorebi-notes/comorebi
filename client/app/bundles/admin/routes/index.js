import React from 'react'
import { Route } from 'react-router'

import Admin from '../containers/Admin'
import EditAdmin from '../components/EditAdmin'

export default function adminRoutes() {
  return (
    <Route path='/admin' component={Admin}>
      <Route path='edit' component={EditAdmin} />
    </Route>
  )
}
