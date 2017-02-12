import React from 'react'
import { Route } from 'react-router'

import Admin from '../containers/Admin'
import Counter from '../components/Sample'

export default function adminRoutes() {
  return (
    <Route path='/admin' component={Admin}>
      <Route path='edit' component={Counter} />
    </Route>
  )
}
