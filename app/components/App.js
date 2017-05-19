import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './nav'
import Home from './home'
import Popular from './popular'
import Battle from './battle'
import { Switch } from 'react-router-dom'


export class App extends React.Component {
    render() {
        return (
            <Router>
                <div className='container'>
                    <Nav />
                    <Switch>
                        <Route exact path='/' component={Home} /> 
                        <Route path='/battle' component={Battle} /> 
                        <Route path='/popular' component={Popular} />
                        <Route render={function() {
                            return <p>not found</p>
                        }} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

module.exports = App;