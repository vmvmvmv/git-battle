import React from 'react';
import PropTypes from 'prop-types';
import api from '../utils/api';

function SelectedLanguage(props) {
    var languages = ['all', 'javascript', 'ruby', 'java', 'css', 'python'];
    return (
        <ul className='lang'>
            {languages.map((item) => {
                return (
                    <li
                        style={ item === props.selectedLanguage ? { color: 'red'} : null}
                        onClick={props.onSelect.bind(null, item)} 
                        key={item}>
                        {item}
                    </li>
                )
            })}
        </ul>
    )
}

SelectedLanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
}


export class Popular extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedLanguage: 'all',
            repos: null
        };

        this.updateLang = this.updateLang.bind(this);
    }
    componentDidMount() {
       this.updateLang(this.state.selectedLanguage);
    }

    updateLang(lang) {
        this.setState(() => {
            return {
                selectedLanguage: lang,
                repos: null
            }
        });
         api.fetchPopularRepos(lang)
            .then((repos) => {
                this.setState(() => {
                    return {
                        repos: repos
                    }
                })
            })
    }
    render() {
        return (
           <div>
                <SelectedLanguage 
                    selectedLanguage={this.state.selectedLanguage}
                    onSelect={this.updateLang}
                />
                {JSON.stringify(this.state.repos, 2, null)}
           </div>
        )
    }
}

