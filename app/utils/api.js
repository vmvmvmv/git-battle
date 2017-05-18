import axios from 'axios';

module.exports = {
    fetchPopularRepos: function(lang) {
        var ecnodeURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:' 
        + lang + 
        '&sort=stars&order=desc&type=Repositories');

        return axios.get(ecnodeURI)
            .then((responce) => responce.data.items)
    }
}