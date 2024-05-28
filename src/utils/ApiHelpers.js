import axios from 'axios'

const BASE_URL = 'https://ninja-api.navyladyveteran.com/api/'
const CHALLENGES_JSON = 'https://raw.githubusercontent.com/'
const GIT_BASE_URL = 'https://api.github.com'

const ENDPOINTS = {
    getCategories: '/categories',
    getImages: '/images',
    getMedium: '/mediums',
    getSubCategories: '/subCategories',
    getChallengesJson: '/melissa-24/codeChallenges/main/challengeData.json',
    getGitUser: '/users',
    getGitOrgs: '/orgs'
};

const TOKENS = {
    MELISSA24: import.meta.env.VITE_GITHUB_TOKEN_USER1,
    DOJO24: import.meta.env.VITE_GITHUB_TOKEN_USER2,
    BEEDEVSERVICES: import.meta.env.VITE_GITHUB_TOKEN_USER3,
    MELISSATECHBYTE: import.meta.env.VITE_GITHUB_TOKEN_USER4,
    TECHBYTELEARNING: import.meta.env.VITE_GITHUB_TOKEN_USER5,
}

const USER_ORG = {
    getUserMelissa24: '/melissa-24',
    getUserDojo24: '/dojo24',
    getUserBeeDevServices: '/beedevservices',
    getUserMelissaTechByte: '/melissa-techByte',
    getUserTechByteLearning: '/techByteLearning'
}

const createUrl = (endpoint) => `${BASE_URL}${endpoint}`;
const createAltUrl = (endpoint) => `${CHALLENGES_JSON}${endpoint}`
const createGitUrl = (endpoint) => `${GIT_BASE_URL}${endpoint}${USER_ORG}/repos`

export const get = async(endpoint, params = {}) => {
    try{
        const res = await axios.get(createUrl(endpoint), {params})
        return res.data
    }
    catch(error) {
        console.log(error)
    }
}
export const challengesGet = async(endpoint, params = {}) => {
    try{
        const res = await axios.get(createAltUrl(endpoint), {params})
        return res.data
    }
    catch(error) {
        console.log(error)
    }
}



export const API = {
    getCategories: () => get(ENDPOINTS.getCategories),
    getImages: () => get(ENDPOINTS.getImages),
    getMedium: () => get(ENDPOINTS.getMedium),
    getSubCategories: () => get(ENDPOINTS.getSubCategories),
    getChallengesJson: () => challengesGet(ENDPOINTS.getChallengesJson)
};