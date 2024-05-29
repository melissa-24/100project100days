import axios from 'axios'

const accounts = {
    'melissa-24': import.meta.env.VITE_GITHUB_TOKEN_USER1,
    // 'dojo24': import.meta.env.VITE_GITHUB_TOKEN_USER2,
    // 'beedevservices': import.meta.env.VITE_GITHUB_TOKEN_USER3,
    // 'techByteLearning': import.meta.env.VITE_GITHUB_TOKEN_USER5
}

// get repos from user
export const fetchRepositories = async (username) => {
    const token = accounts[username]
    const url = `https://api.github.com/users/${username}/repos`
    const headers = { 'Authorization': `token ${token}` }
    const response = await axios.get(url, { headers })
    console.log("fetchRepos res", response)
    return response
};