import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
    render () {
        return (
            <div className="home-container">
                <h1>GH Battle</h1>
                <Link className="button" to='/battle' />
            </div>
        )
    }
}

module.exports = Home;