import axios from 'axios'

const BASE_URL = 'https://ninja-api.navyladyveteran.com/api/';

const ENDPOINTS = {
    getCategories: '/categories',
    getImages: '/images',
    getMedium: '/mediums',
    getSubCategories: '/subCategories'
    // Add more endpoints as needed
};

const createUrl = (endpoint) => `${BASE_URL}${endpoint}`;


export const get = async(endpoint, params = {}) => {
    try{
        const res = await axios.get(createUrl(endpoint), {params})
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
    getSubCategories: () => get(ENDPOINTS.getSubCategories)
};
