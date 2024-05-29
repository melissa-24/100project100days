import axios from 'axios'

const GITHUB_API_URL = "https://api.github.com";

const accounts = {
    'melissa-24': import.meta.env.VITE_GITHUB_TOKEN_USER1,
    'dojo24': import.meta.env.VITE_GITHUB_TOKEN_USER2,
    'beedevservices': import.meta.env.VITE_GITHUB_TOKEN_USER3,
    'techByteLearning': import.meta.env.VITE_GITHUB_TOKEN_USER5
}

// get repos from user
export const fetchRepositories = async (username) => {
    const token = accounts[username]
    let page = 1;
    let repos = [];
    let fetchedRepos;

    do {
        const response = await axios.get(`${GITHUB_API_URL}/users/${username}/repos`, {
            params: {
                per_page: 100,
                page: page
            },
            headers: {
                Authorization: `token ${token}`
            }
        })
        fetchedRepos = response.data
        repos = repos.concat(fetchedRepos)
        page += 1
    } while (fetchedRepos.length === 100)
    
    return repos
}