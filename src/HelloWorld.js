import React from 'react'
import ReactCSSModule from 'react-css-modules'
import styles from './HelloWorld.css'

class HelloWorld extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            numClicks: 0
        }

        this.onClick = this.onClick.bind(this)
    }

    onClick () {
        this.setState((prevState, props) => ({
            numClicks: prevState.numClicks + 1
        }))
    }

    render () {
        return (
            <div onClick={this.onClick} styleName="test">
                {this.state.numClicks} clicks<span className="haha">xxx</span>
            </div>
        )
    }
}

export default ReactCSSModule(HelloWorld, styles)
