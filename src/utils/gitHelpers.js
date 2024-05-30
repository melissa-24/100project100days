import axios from 'axios'

const GITHUB_API_URL = "https://api.github.com";

const accounts = {
    'melissa-24': import.meta.env.VITE_GITHUB_TOKEN_USER1,
    'dojo24': import.meta.env.VITE_GITHUB_TOKEN_USER2,
    'beedevservices': import.meta.env.VITE_GITHUB_TOKEN_USER3,
    'techByteLearning': import.meta.env.VITE_GITHUB_TOKEN_USER5
}

// get repos from user
const fetchRepositories = async (username) => {
    const token = accounts[username]
    let page = 1;
    let repos = [];
    let fetchedRepos;

    do {
        const response = await axios.get(`${GITHUB_API_URL}/user/repos`, {
            params: {
                per_page: 100,
                page: page,
                visibility: 'all'
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

// get all repos for a list of users
const fetchAllRepos = async (usernames) => {
    let combinedRepos = []
    for (const username of usernames) {
        const userRepos = await fetchRepositories(username)
        combinedRepos = combinedRepos.concat(userRepos)
    }
    console.log("combined repo list", combinedRepos)
    return combinedRepos
}

// get commit data from one repo for a specific user
const fetchRepoCommitByUser = async (username, repoName) => {
    const token = accounts[username]
    let page = 1
    let userCommits = []
    let fetchedCommits

    do {
        const res = await axios.get(`${GITHUB_API_URL}/repos/${repoName}/commits`, {
            params: {
                per_page: 100,
                page: page,
                author: username
            },
            headers: {
                Authorization: `token ${token}`
            }
        })
        fetchedCommits = res.data
        userCommits = userCommits.concat(fetchedCommits)
        page += 1
    } while (fetchedCommits.length === 100)
    
    return userCommits
}

// get commit data for all repos for the user
const fetchAllCommitsForUser = async (username) => {
    const repos = await fetchAllRepos(username)
    let allCommits = []

    for (const repo of repos) {
        const commits = await fetchRepoCommitByUser(username, repo.full_name)
        allCommits = allCommits.concat(commits)
    }
    return allCommits
}

export { fetchRepositories, fetchAllRepos, fetchAllCommitsForUser }