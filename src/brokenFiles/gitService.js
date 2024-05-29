// src/services/githubService.js
import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';

const githubService = {
    getUserEvents: async (username) => {
        const response = await axios.get(`${GITHUB_API_URL}/users/${username}/events`, {
            headers: {
                Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN_USER1}`,
            },
        });
        return response.data;
    },
};

export default githubService;