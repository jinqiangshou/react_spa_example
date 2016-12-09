import React from 'react'
import { Link } from 'react-router'
import TopNavBar from 'components/common/TopNavBar'

class App extends React.Component {
    render () {
        return (
            <div>
                <TopNavBar />
                <ul>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/tab1">Tab1</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}

export default App
