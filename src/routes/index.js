import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from '../App'
import Home from '../views/home/Home'
import Tab1 from '../views/tab1/Tab1'

const routes = (
     <Route path="/" component={App} >
        <IndexRoute component={Home} />
        <Route path="tab1" component={Tab1} />
    </Route>
)

export default routes
