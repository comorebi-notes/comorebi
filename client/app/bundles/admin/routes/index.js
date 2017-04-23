import React from 'react'
import { Route, IndexRoute } from 'react-router'

import AdminContainer from '../containers/Admin'
import ShowAllWorks from '../components/ShowAllWorks'
import EditAdmin from '../components/EditAdmin'
import EditWork from '../components/EditWork'
import NewWork from '../components/NewWork'

export default function adminRoutes() {
  return (
    <Route path='/admin' component={AdminContainer}>
      <IndexRoute component={ShowAllWorks} />
      <Route path='edit' component={EditAdmin} />
      <Route path='works' component={ShowAllWorks} />
      <Route path='works/new' component={NewWork} />
      <Route path='works/:id' component={EditWork} />
    </Route>
  )
}
