import React from 'react'
import { Route, IndexRoute } from 'react-router'

import AdminContainer from '../containers/Admin'
import EditAdmin from '../components/EditAdmin'

import ShowAllArticles from '../components/ShowAllArticles'
import ShowAllMusics from '../components/ShowAllMusics'
import EditArticle from '../components/EditArticle'
import NewArticle from '../components/NewArticle'

export default function adminRoutes() {
  return (
    <Route path='/admin' component={AdminContainer}>
      <IndexRoute component={ShowAllArticles} />
      <Route path='edit' component={EditAdmin} />

      <Route path='articles'>
        <IndexRoute component={ShowAllArticles} />
        <Route path='new' component={NewArticle} />
        <Route path=':id' component={EditArticle} />
      </Route>

      <Route path='musics'>
        <IndexRoute component={ShowAllMusics} />
      </Route>
    </Route>
  )
}
