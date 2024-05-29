const GITHUB_API_URL = "https://api.github.com";

const accounts = {
    'melissa-24': import.meta.env.VITE_GITHUB_TOKEN_USER1,
    'dojo24': import.meta.env.VITE_GITHUB_TOKEN_USER2,
    'beedevservices': import.meta.env.VITE_GITHUB_TOKEN_USER3,
    'techByteLearning': import.meta.env.VITE_GITHUB_TOKEN_USER5
};

const fetchAllRepos = async (username, token) => {
    let page = 1;
    let repos = [];
    let fetchedRepos;

    do {
        const response = await fetch(`${GITHUB_API_URL}/users/${username}/repos?per_page=100&page=${page}`, {
            headers: {
                Authorization: `token ${token}`
            }
        });

        console.log('user repo res', response)
        if (!response.ok) {
            throw new Error(`Error fetching repos for user ${username}`);
        }

        fetchedRepos = await response.json();
        repos = repos.concat(fetchedRepos);
        page += 1;
    } while (fetchedRepos.length === 100);

    return repos.length;
};

const fetchRepoCount = async (username) => {
    const token = accounts[username];

    if (!token) {
        throw new Error(`No token found for user ${username}`);
    }

    return await fetchAllRepos(username, token);
};

const fetchOrganizations = async (username) => {
    const token = accounts[username];

    if (!token) {
        throw new Error(`No token found for user ${username}`);
    }

    const response = await fetch(`${GITHUB_API_URL}/users/${username}/orgs`, {
        headers: {
            Authorization: `token ${token}`
        }
    });

    if (!response.ok) {
        throw new Error(`Error fetching organizations for user ${username}`);
    }

    const data = await response.json();
    console.log("org data", data, "response", response.headers)
    return data;
};

export { fetchRepoCount, fetchOrganizations };