import React from 'react'
import ReactCSSModule from 'react-css-modules'
import TopNavBar from 'components/common/TopNavBar'
import SideNavBar from 'components/common/SideNavBar'
import styles from './app.styl'

class App extends React.Component {
  render () {
    return (
      <div>
        <TopNavBar />
        <SideNavBar />
        <div styleName='content-body'>
          <div styleName='content-core'>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default ReactCSSModule(App, styles)
