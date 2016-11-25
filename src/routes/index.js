import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Main from 'views/Main'
import Home from 'views/home/Home'
import Tab1 from 'views/tab1/Tab1'

export default (
  <Route path="/" component={Main}>
    <Route path="tab1" component={Tab1} />
    <IndexRoute component={Home} />
  </Route>
)