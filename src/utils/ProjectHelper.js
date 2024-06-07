import projects from '../json/projects.json'


export const projFilter = (theFilter) => {
    const results = projects.filter(project => project[theFilter])
    return results
}

export const projLength = (theFilter) => {
    const results = projFilter(theFilter).length
    return results
}

