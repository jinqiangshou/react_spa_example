import React, { PureComponent, PropTypes } from 'react'
import ReactCSSModule from 'react-css-modules'
import customStyles from './checkbox1.styl'

class Checkbox1 extends PureComponent {
    render () {
        return (
            <label styleName="checkbox-label">
                <input styleName="checkbox-input" type="checkbox" />
                <span styleName="checkbox-span"></span>
                <span styleName="checkbox-text">
                    {this.props.children}
                </span>
            </label>
        )
    }
}

Checkbox1.propTypes = {
    checked: PropTypes.bool,
    checkValue: PropTypes.any,
    children: PropTypes.any
}

Checkbox1.defaultProps = {
    checkValue: true,
    checked: false
}

export default ReactCSSModule(Checkbox1, customStyles)
