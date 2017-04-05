import React from 'react'
import { Route, IndexRoute } from 'react-router'

import AdminContainer from '../containers/Admin'
import EditAdmin from '../components/EditAdmin'
import ShowAllWorks from '../components/ShowAllWorks'

export default function adminRoutes() {
  return (
    <Route path='/admin' component={AdminContainer}>
      <IndexRoute component={ShowAllWorks} />
      <Route path='edit' component={EditAdmin} />
    </Route>
  )
}
