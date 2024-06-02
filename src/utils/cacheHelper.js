// cacheHelper.js

// Set cache with expiry time
const setCache = (key, data, ttl) => {
    try {
        const now = new Date().getTime();
        const expiry = now + ttl;
        const cacheData = { data, expiry };
        localStorage.setItem(key, JSON.stringify(cacheData));
    } catch (error) {
        console.error(`Error setting cache for key ${key}:`, error);
    }
};

// Get cache if not expired
const getCache = (key) => {
    try {
        const cachedData = localStorage.getItem(key);
        if (!cachedData) return null;

        const { data, expiry } = JSON.parse(cachedData);
        const now = new Date().getTime();
        
        if (now > expiry) {
            localStorage.removeItem(key);
            return null;
        }
        return data;
    } catch (error) {
        console.error(`Error getting cache for key ${key}:`, error);
        return null;
    }
};

export { setCache, getCache };
