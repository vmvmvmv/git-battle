import React from 'react';
import ReactDOM from 'react-dom'
import style from './index.css'
import PropTypes from 'prop-types'

export class Badge extends React.Component {
    render() {
        return (
            <div>
                <img    
                    src={this.props.img}
                    alt="ava"
                />
                <h1>{this.props.name}</h1>
                <h3>{this.props.username}</h3>
            </div>
        )
    }
}

Badge.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
}

ReactDOM.render(
    <Badge
        name='Tyler'
        username='tylermc'
        img='https://avatars0.githubusercontent.com/u/2933430?v=36s=460'
    />,
    document.getElementById('app')
);