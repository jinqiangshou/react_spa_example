import React from 'react'
import ReactCSSModule from 'react-css-modules'
import { Link } from 'react-router'
import styles from './index.styl'

class SideNavBar extends React.Component {
    render () {
        return (
            <div styleName='side-nav'>
                <ul>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/tab1">Tab1</Link></li>
                </ul>
            </div>
        )
    }
}

export default ReactCSSModule(SideNavBar, styles)
