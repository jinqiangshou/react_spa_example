import { Component, PropTypes, createElement } from 'react'
import ReactCSSModule from 'react-css-modules'
import customStyles from './button1.styl'

class Button1 extends Component {
    constructor (props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick () {
        const { onClick } = this.props

        onClick && onClick()
    }

    render () {
        let { children } = this.props

        let attributes = {
            className: this.props.styles[this.props.status],
            type: this.props.type,
            onClick: this.handleClick
        }
        return createElement(
            'button',
            attributes,
            children
        )
    }
}

Button1.propTypes = {
    children: PropTypes.any,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    type: PropTypes.oneOf(['button', 'reset', 'submit']),
    status: PropTypes.oneOf(['primary', 'success', 'warning', 'error', 'info', 'normal', 'default'])
}

Button1.defaultProps = {
    type: 'button',
    status: 'default'
}

export default ReactCSSModule(Button1, customStyles)
