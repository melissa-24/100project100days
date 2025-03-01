import axios from 'axios'

const BASE_URL = 'https://ninja-api.navyladyveteran.com/api/'
const CHALLENGES_JSON = 'https://raw.githubusercontent.com/'
const GIT_BASE_URL = 'https://api.github.com'
const HTTP_STATUS_URL='https://httphive.com'
const NASA_APOD_URL = 'https://api.nasa.gov/planetary/apod?api_key='

const NASA_KEY = import.meta.env.VITE_NASA_TOKEN

const ENDPOINTS = {
    getCategories: '/categories',
    getImages: '/images',
    getMedium: '/mediums',
    getSubCategories: '/subCategories',
    getChallengesJson: '/melissa-24/codeChallenges/main/challengeData.json',
    getCodes: '/json.json'
};

const createUrl = (endpoint) => `${BASE_URL}${endpoint}`;
const createAltUrl = (endpoint) => `${CHALLENGES_JSON}${endpoint}`
const codesUrl = (endpoint) => `${HTTP_STATUS_URL}${endpoint}`
const nasaUrl = `${NASA_APOD_URL}${NASA_KEY}`

export const get = async(endpoint, params = {}) => {
    try{
        const res = await axios.get(createUrl(endpoint), {params})
        return res.data
    }
    catch(error) {
        console.log(error)
    }
}
export const codeGet = async(endpoint, params = {}) => {
    try{
        const res = await axios.get(codesUrl(endpoint), {params})
        console.log('testing axios call for codes', res.data)
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

export const nasaGet = async(params = {}) => {
    try{
        const res = await axios.get(nasaUrl, {params})
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
    getChallengesJson: () => challengesGet(ENDPOINTS.getChallengesJson),
    getStatusCodesJson: () => codeGet(ENDPOINTS.getCodes),
    getNasaApod: () => nasaGet()
};