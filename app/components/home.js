import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
    render () {
        return (
            <div className="home-container">
                <h1>The app was created for training. You can try to check who more powerful on github</h1>
                <Link className="button" to='/battle'> go battle </Link>
            </div>
        )
    }
}

module.exports = Home;