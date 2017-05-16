import React from 'react';

export class Popular extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedLang: 'all'
        };

        this.updateLang = this.updateLang.bind(this);
    }

    updateLang(lang) {
        this.setState(() => {
            return {
                selectedLang: lang
            }
        });
    }
    render() {
    var languages = ['all', 'javascript', 'ruby', 'java', 'css', 'python'];
        return (
            <ul className='lang'>
                {languages.map((item) => {
                    return (
                        <li
                            style={ item === this.state.selectedLang ? { color: 'red'} : null}
                            onClick={this.updateLang.bind(null, item)} 
                            key={item}>
                            {item}
                        </li>
                    )
                })}
            </ul>
        )
    }
}

