import React from 'react'

class Battle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            playerOneName: '',
            playerOneImage: '',
            playerTwoName: '',
            playerTwoImage: ''

        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit (id, username) {
        this.setState(() => {
            var newState = {};
            newState[id + 'Name'] = username;
            newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200';
            return newState;
        });
    }
    render () {
        var playerOneName = this.state.playerOneName;
        var playerTwoName = this.state.playerTwoName;
        return (
            <div>
                <div className="row">
                    {!playerOneName && <PlayerInput id="playerOne" label="player One" onSubmit={this.handleSubmit} />}
                    {!playerTwoName && <PlayerInput id="playerTwo" label="player Two" onSubmit={this.handleSubmit}/>}
                </div>
            </div>
        )
    }
}
//13:17

module.exports = Battle;

