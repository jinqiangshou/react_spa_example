import React from 'react'
import ReactCSSModule from 'react-css-modules'
import { Link, withRouter } from 'react-router'
import styles from './index.styl'

class SideNavBar extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            list: [
                {
                    path: '/',
                    title: 'home'
                }, {
                    path: '/tab1',
                    title: 'tab1',
                    child: [
                        {path: '/tab2', title: 'tab2'}
                    ]
                }
            ]
        }
    }

    componentDidMount () {
        console.log(arguments)
        console.log(this.props)
        console.log(this.props.location)
        console.log(this.props.router)
        console.log(window.location)
    }

    render () {
        let activeCss = {'background': '#BBB'}

        let listItems = this.state.list.map(function (item, index) {
            let subItem = null

            if (item.child && item.child.length > 0) {
                let subItemList = item.child.map((child, subIndex) => (
                    <li key={subIndex}>
                        <Link
                            activeStyle={activeCss}
                            to={child.path}
                        >{child.title}</Link>
                    </li>
                ))

                subItem = (
                    <div styleName='side-nav-child'>
                        <ul>{subItemList}</ul>
                    </div>
                )
            }

            return (
                <li key={index}>
                    <Link
                        to={item.path}
                        activeStyle={activeCss}
                        onlyActiveOnIndex={true}
                    >{item.title}</Link>
                    {subItem}
                </li>
            )
        })

        return (
            <div styleName='side-nav'>
                <ul>{listItems}</ul>
            </div>
        )
    }
}

export default withRouter(ReactCSSModule(SideNavBar, styles))
