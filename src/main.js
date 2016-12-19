import React from 'react'
import { render } from 'react-dom'
import { Router, hashHistory } from 'react-router'

import routes from './routes'

require('normalize.css')
require('common/css/common_style.styl')

render((
    <Router history={hashHistory} routes={routes} />
), document.getElementById('app'))
