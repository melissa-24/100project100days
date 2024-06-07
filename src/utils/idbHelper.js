import { openDB } from 'idb';

const DB_NAME = 'githubData';
const STORE_NAME = 'cacheStore';

const initDB = async () => {
    return openDB(DB_NAME, 1, {
        upgrade(db) {
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME, { keyPath: 'key' });
            }
        }
    });
};

export const setCache = async (key, data, ttl) => {
    try {
        const db = await initDB();
        const now = new Date().getTime();
        const expiry = now + ttl;
        const cacheData = { key, data, expiry };
        const tx = db.transaction(STORE_NAME, 'readwrite');
        await tx.store.put(cacheData);
        await tx.done;
    } catch (error) {
        console.error(`Error setting cache for key ${key}:`, error);
    }
};

export const getCache = async (key) => {
    try {
        const db = await initDB();
        const tx = db.transaction(STORE_NAME, 'readonly');
        const cacheData = await tx.store.get(key);

        if (!cacheData) return null;

        const { data, expiry } = cacheData;
        const now = new Date().getTime();

        if (now > expiry) {
            const txDelete = db.transaction(STORE_NAME, 'readwrite');
            await txDelete.store.delete(key);
            await txDelete.done;
            return null;
        }
        return data;
    } catch (error) {
        console.error(`Error getting cache for key ${key}:`, error);
        return null;
    }
};
