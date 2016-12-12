import React from 'react'
import ReactCSSModule from 'react-css-modules'
import { Link, withRouter } from 'react-router'
import arr from 'lodash/array'
import styles from './index.styl'

class SideNavBar extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            list: [
                {
                    path: '/',
                    title: 'home',
                    childPathList: [
                        '/'
                    ]
                }, {
                    path: '/tab1',
                    title: 'tab1',
                    childPathList: [
                        '/tab1', '/tab2'
                    ],
                    child: [
                        {path: '/tab1', title: 'tab1sub'},
                        {path: '/tab2', title: 'tab2'}
                    ]
                }
            ]
        }
    }

    componentDidMount () {
        // console.log(arguments)
        // console.log(this.props)
        // console.log(this.props.location)
        // console.log(this.props.router)
        // console.log(window.location)
    }

    render () {
        let _self = this

        let listItems = this.state.list.map(function (item, index) {
            let subItem = null

            let shouldShowSubItem = item.child &&
                item.child.length > 0 &&
                arr.indexOf(item.childPathList, _self.props.location.pathname) >= 0

            let activeSubItemCss = {fontWeight: 'bold'}

            if (shouldShowSubItem) {
                let subItemList = item.child.map((child, subIndex) => (
                    <li key={subIndex}>
                        <Link
                            activeStyle={activeSubItemCss}
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
