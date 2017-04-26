import React from 'react'
import { Route, IndexRoute } from 'react-router'

import AdminContainer from '../containers/Admin'
import EditAdmin from '../components/EditAdmin'

import ShowAllWorks from '../components/ShowAllWorks'
import ShowAllMusics from '../components/ShowAllMusics'
import EditWork from '../components/EditWork'
import NewWork from '../components/NewWork'

export default function adminRoutes() {
  return (
    <Route path='/admin' component={AdminContainer}>
      <IndexRoute component={ShowAllWorks} />
      <Route path='edit' component={EditAdmin} />

      <Route path='works'>
        <IndexRoute component={ShowAllWorks} />
        <Route path='new' component={NewWork} />
        <Route path=':id' component={EditWork} />
      </Route>

      <Route path='musics'>
        <IndexRoute component={ShowAllMusics} />
      </Route>
    </Route>
  )
}
