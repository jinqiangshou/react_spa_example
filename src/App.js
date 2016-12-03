import React from 'react'
import { Link } from 'react-router'

class App extends React.Component {
    render () {
        return (
            <div>
                <h1>App test</h1>
                <ul>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/tab1">Inbox</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}

export default App