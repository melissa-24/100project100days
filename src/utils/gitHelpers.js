import axios from 'axios'
import { setCache, getCache } from './cacheHelper'

const GITHUB_API_URL = "https://api.github.com";
const CACHE_TTL = 2 * 60 * 60 * 1000

const accounts = {
    'melissa-24': import.meta.env.VITE_GITHUB_TOKEN_USER1,
    'dojo24': import.meta.env.VITE_GITHUB_TOKEN_USER2,
    'beedevservices': import.meta.env.VITE_GITHUB_TOKEN_USER3,
    'techByteLearning': import.meta.env.VITE_GITHUB_TOKEN_USER5
}

// get repos from user
const fetchRepositories = async (username) => {

    // checking for cached data
    // const cacheKey = `repos_${username}`;
    // const cachedRepos = getCache(cacheKey);

    // if (cachedRepos) {
    //     return cachedRepos;
    // }

    const token = accounts[username]
    // console.log("token and user in fetch repo", username, token)
    // console.log("FetchRepo Token:", token ? "Present" : "Missing");
    if (!token) {
        throw new Error(`Token for user ${username} is not set in get Repos`);
    }
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
        // console.log("response in fetchRepos", response, "repos in fetch repos", repos)
        page += 1
    } while (fetchedRepos.length === 100)

    // setCache(cacheKey, repos, CACHE_TTL);
    
    return repos
}

// get all repos for a list of users
const fetchAllRepos = async (usernames) => {

    const cacheKey = `all_repos_${usernames.join('_')}`;
    const cachedRepos = getCache(cacheKey);

    if (cachedRepos) {
        return cachedRepos;
    }

    let combinedRepos = []
    for (const username of usernames) {
        const userRepos = await fetchRepositories(username)
        combinedRepos = combinedRepos.concat(userRepos)
    }
    // console.log("combined repo list", combinedRepos)

    setCache(cacheKey, combinedRepos, CACHE_TTL);
    return combinedRepos
}

// get commit data from one repo for a specific user
const fetchRepoCommitByUser = async (username, repoName) => {

    // setting cached
    // const cacheKey = `commits_${username}_${repoName}`;
    // const cachedCommits = getCache(cacheKey);

    // if (cachedCommits) {
    //     return cachedCommits;
    // }

    const token = accounts[username]
    // console.log("token and user in fetch repo commits", username, token)
    // console.log("FetchRepoCommitUser Token:", token ? "Present" : "Missing");
    if (!token) {
        throw new Error(`Token for user ${username} is not set`);
    }
    let page = 1
    let userCommits = []
    let fetchedCommits

    try {
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
            });
            fetchedCommits = res.data;
            userCommits = userCommits.concat(fetchedCommits);
            page += 1;
        } while (fetchedCommits.length === 100);
    } catch (error) {
        if (error.response && error.response.status === 409) {
            // console.error(`Conflict error (409) fetching commits for repo ${repoName}:`, error.response.data);
            // Handle 409 error specifically
            throw new Error(`Conflict error fetching commits for ${repoName}.`);
        } else {
            // console.error(`Error fetching commits for repo ${repoName}:`, error.response ? error.response.data : error.message);
            throw error;
        }
    }

    // setCache(cacheKey, userCommits, CACHE_TTL)
    return userCommits;
};

// get commit data for all repos for the user
const fetchAllCommitsForUser = async (username) => {

    const cacheKey = `commits_${username}`;
    const cachedCommits = getCache(cacheKey);

    if (cachedCommits) {
        return cachedCommits;
    }

    const repos = await fetchAllRepos([username])
    let allCommits = []

    for (const repo of repos) {
        const commits = await fetchRepoCommitByUser(username, repo.full_name)
        allCommits = allCommits.concat(commits)
    }

    setCache(cacheKey, allCommits, CACHE_TTL);
    return allCommits
}

export { fetchRepositories, fetchAllRepos, fetchAllCommitsForUser }