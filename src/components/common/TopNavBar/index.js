import React from 'react'
import ReactCSSModule from 'react-css-modules'
import styles from './index.styl'

class TopNavBar extends React.Component {
    render () {
        return (
            <div className='nav' styleName='nav'>
                测试
            </div>
        )
    }
}

export default ReactCSSModule(TopNavBar, styles)
