import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

import AdminContainer from '../containers/Admin'
import EditAdmin from '../components/EditAdmin'

import ShowAllArticles from '../components/ShowAllArticles'
import NewArticle from '../components/NewArticle'
import EditArticle from '../components/EditArticle'
import ShowAllMusics from '../components/ShowAllMusics'
import NewMusic from '../components/NewMusic'
import EditMusic from '../components/EditMusic'

const adminRoutes = () => (
  <Route component={AdminContainer}>
    <Redirect from='admin' to='admin/articles' />
    <Route path='admin'>
      <Route path='edit' component={EditAdmin} />

      <Route path='articles'>
        <IndexRoute component={ShowAllArticles} />
        <Route path='new' component={NewArticle} />
        <Route path=':id' component={EditArticle} />
      </Route>

      <Route path='musics'>
        <IndexRoute component={ShowAllMusics} />
        <Route path='new' component={NewMusic} />
        <Route path=':id' component={EditMusic} />
      </Route>
    </Route>
  </Route>
)

export default adminRoutes
