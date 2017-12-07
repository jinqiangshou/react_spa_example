import React from 'react'
import ReactCSSModule from 'react-css-modules'
import styles from './index.styl'

class TopNavBar extends React.Component {
  render () {
    return (
      <div styleName='top-nav'>
        <div styleName='logo'>
          React SPA Example
        </div>
      </div>
    )
  }
}

export default ReactCSSModule(TopNavBar, styles)
