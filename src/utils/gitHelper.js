import axios from "axios"

const accounts = {
    'melissa-24': import.meta.env.VITE_GITHUB_TOKEN_USER1,
    // 'dojo24': import.meta.env.VITE_GITHUB_TOKEN_USER2,
    // 'beedevservices': import.meta.env.VITE_GITHUB_TOKEN_USER3,
    // 'melissa-techByte': import.meta.env.VITE_GITHUB_TOKEN_USER4,
    // 'techByteLearning': import.meta.env.VITE_GITHUB_TOKEN_USER5
};

const fetchRepositories = async (username, token) => {
    const url = `https://api.github.com/users/${username}/repos`;
    const headers = { 'Authorization': `token ${token}` };
    const response = await axios.get(url, { headers });
    return response.data.map(repo => ({ owner: username, name: repo.name }));
};

const fetchOrgRepositories = async (org, token) => {
    const url = `https://api.github.com/orgs/${org}/repos`;
    const headers = { 'Authorization': `token ${token}` };
    const response = await axios.get(url, { headers });
    return response.data.map(repo => ({ owner: org, name: repo.name }));
};

const fetchUserOrgs = async (username, token) => {
    const url = `https://api.github.com/users/${username}/orgs`;
    const headers = { 'Authorization': `token ${token}` };
    const response = await axios.get(url, { headers });
    return response.data.map(org => org.login);
};

const fetchCommits = async (owner, repo, token) => {
    const url = `https://api.github.com/repos/${owner}/${repo}/commits?per_page=100`;
    const headers = { 'Authorization': `token ${token}` };
    let page = 1;
    let commitDates = [];

    while (true) {
        const response = await axios.get(`${url}&page=${page}`, { headers });
        if (response.data.length === 0) break;
        commitDates = commitDates.concat(response.data.map(commit => commit.commit.author.date.slice(0, 10)));
        page++;
    }

    return commitDates;
};

const fetchAllCommitDates = async () => {
    let allCommitDates = [];

    for (let username in accounts) {
        const token = accounts[username];

        // Fetch user repositories
        const userRepos = await fetchRepositories(username, token);
        for (let repo of userRepos) {
            const commitDates = await fetchCommits(repo.owner, repo.name, token);
            allCommitDates = allCommitDates.concat(commitDates);
        }

        // Fetch organization repositories
        const orgs = await fetchUserOrgs(username, token);
        for (let org of orgs) {
            const orgRepos = await fetchOrgRepositories(org, token);
            for (let repo of orgRepos) {
                const commitDates = await fetchCommits(repo.owner, repo.name, token);
                allCommitDates = allCommitDates.concat(commitDates);
            }
        }
    }

    return allCommitDates;
};

const CACHE_KEY = 'commitData';
const CACHE_TIMESTAMP_KEY = 'commitDataTimestamp';
const ONE_DAY = 24 * 60 * 60 * 1000; // One day in milliseconds

export const getCommitData = async () => {
    const now = Date.now();
    const cachedData = localStorage.getItem(CACHE_KEY);
    const cachedTimestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);

    if (cachedData && cachedTimestamp && (now - cachedTimestamp) < ONE_DAY) {
        return JSON.parse(cachedData);
    }

    const allCommitDates = await fetchAllCommitDates();
    localStorage.setItem(CACHE_KEY, JSON.stringify(allCommitDates));
    localStorage.setItem(CACHE_TIMESTAMP_KEY, now.toString());

    return allCommitDates;
};