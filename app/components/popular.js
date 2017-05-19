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

function RepoGrid(props) {
    return (
        <ul className="popular-list">
            {props.repos.map((repo, index) => {
                return (
                    <li key={repo.name} className="popular-item">
                        <div className="popular-rank">#{index + 1}</div>
                        <ul className="space-list-items">
                            <li>
                                <img
                                    className="avatar"
                                    src={repo.owner.avatar_url}
                                    alt="avatar"
                                />
                            </li>
                            <li><a href={repo.html_url}>{repo.name}</a></li>
                            <li>@{repo.owner.login}</li>
                            <li>{repo.stargazers_count}</li>
                        </ul>
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

RepoGrid.propTypes = {
    repos: PropTypes.array.isRequired
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
                {!this.state.repos ? 
                    <p>Loading</p> : 
                    <RepoGrid repos={this.state.repos} />
                }
           </div>
        )
    }
}

module.exports = Popular;

