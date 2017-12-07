import React, { Component } from 'react'
import ReactCSSModule from 'react-css-modules'

import Button1 from 'widgets/button/Button1'
import Checkbox1 from 'widgets/checkbox/Checkbox1'
import styles from './index.styl'

class Tab1 extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    console.log(this)
  }
  render () {
    return (
      <div>
        <div styleName='block'>
          <div styleName='title'>
            <h3>Button</h3>
          </div>
          <div styleName='row'>
            <Button1>Default</Button1>
            <Button1
              status='primary'
              onClick={this.handleClick}
            >Primary</Button1>
            <Button1 status='success'>Success</Button1>
            <Button1 status='warning'>Warning</Button1>
            <Button1 status='error'>Error</Button1>
            <Button1 status='normal'>Normal</Button1>
            <Button1 status='info'>Info</Button1>
          </div>
        </div>
        <div styleName='block'>
          <div styleName='title'>
            <h3>Checkbox</h3>
          </div>
          <div styleName='row'>
            <Checkbox1>Default</Checkbox1>
          </div>
        </div>
      </div>
    )
  }
}

export default ReactCSSModule(Tab1, styles)
