import axios from 'axios';

const accounts = {
  'melissa-24': import.meta.env.VITE_GITHUB_TOKEN_USER1,
  'dojo24': import.meta.env.VITE_GITHUB_TOKEN_USER2,
  'beedevservices': import.meta.env.VITE_GITHUB_TOKEN_USER3,
  'melissa-techByte': import.meta.env.VITE_GITHUB_TOKEN_USER4,
  'techByteLearning': import.meta.env.VITE_GITHUB_TOKEN_USER5
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

const fetchCommits = async (owner, repo, token, usernames) => {
  const url = `https://api.github.com/repos/${owner}/${repo}/commits?per_page=100`;
  const headers = { 'Authorization': `token ${token}` };
  let page = 1;
  let commitDates = [];

  while (true) {
    const response = await axios.get(`${url}&page=${page}`, { headers });
    if (response.data.length === 0) break;

    // Filter commits by author
    const filteredCommits = response.data.filter(commit => {
      return commit.author && usernames.includes(commit.author.login);
    });

    commitDates = commitDates.concat(filteredCommits.map(commit => commit.commit.author.date.slice(0, 10)));
    page++;
  }

  return commitDates;
};

const fetchAllCommitDates = async () => {
  let allCommitDates = [];
  const usernames = Object.keys(accounts);

  for (let username of usernames) {
    const token = accounts[username];

    // Fetch user repositories
    const userRepos = await fetchRepositories(username, token);
    console.log(`User Repos for ${username}:`, userRepos);
    for (let repo of userRepos) {
      const commitDates = await fetchCommits(repo.owner, repo.name, token, usernames);
      console.log(`Commits for ${repo.owner}/${repo.name}:`, commitDates);
      allCommitDates = allCommitDates.concat(commitDates);
    }

    // Fetch organization repositories
    const orgs = await fetchUserOrgs(username, token);
    console.log(`Orgs for ${username}:`, orgs);
    for (let org of orgs) {
      const orgRepos = await fetchOrgRepositories(org, token);
      console.log(`Org Repos for ${org}:`, orgRepos);
      for (let repo of orgRepos) {
        const commitDates = await fetchCommits(repo.owner, repo.name, token, usernames);
        console.log(`Commits for ${repo.owner}/${repo.name}:`, commitDates);
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
    console.log("Returning cached data");
    return JSON.parse(cachedData);
  }

  const allCommitDates = await fetchAllCommitDates();
  console.log("All commit dates:", allCommitDates);

  // Get the last 365 days
  const last365Days = Array.from({ length: 365 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - i);
    return date.toISOString().slice(0, 10);
  });

  const last365DaysCommits = allCommitDates.filter(date => last365Days.includes(date));
  console.log("Last 365 days commits:", last365DaysCommits);

  // Group commits by year
  const commitsByYear = allCommitDates.reduce((acc, date) => {
    const year = date.slice(0, 4);
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(date);
    return acc;
  }, {});

  const yearsWithData = Object.keys(commitsByYear).map(year => ({
    year,
    commits: commitsByYear[year],
  }));
  console.log("Commits by year:", yearsWithData);

  const commitData = {
    last365Days: last365DaysCommits,
    yearsWithData,
  };

  localStorage.setItem(CACHE_KEY, JSON.stringify(commitData));
  localStorage.setItem(CACHE_TIMESTAMP_KEY, now.toString());

  return commitData;
};
