import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// import routes from './routes'
import Home from 'views/home'
import App from 'App'
import Tab1 from 'views/tab1'
import Tab2 from 'views/tab2'
import NotFound from 'views/notfound'

require('normalize.css')
require('common/css/common_style.styl')

render((
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/tab1" component={Tab1} />
        <Route path="/tab2" component={Tab2} />
        <Route component={NotFound} />
      </Switch>
    </App>
  </BrowserRouter>
), document.getElementById('app'))
