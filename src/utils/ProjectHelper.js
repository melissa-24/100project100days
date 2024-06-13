import projects from '../json/projects.json'
import starTrek from '../json/showDB/starTrekNames.json'


export const projFilter = (theFilter) => {
    const results = projects.filter(project => project[theFilter])
    return results
}

export const projLength = (theFilter) => {
    const results = projFilter(theFilter).length
    return results
}

export const projFilterByContent = (key) => {
    const results = projects.filter(project => {
        const value = project[key]
        return typeof value === 'string' && value.trim() !== ""
    })
    return results
}

export const projContentLength = (key) => {
    const results = projFilterByContent(key).length
    return results
}

const combinedData = [...starTrek];

export const extractFieldFromData = (field) => {
    return combinedData.map(item => item[field]);
};