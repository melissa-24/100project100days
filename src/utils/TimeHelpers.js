export const getDate = () => {
    const date = new Date().toLocaleDateString()
    return date
};

export const getTime = () => {
    const time = new Date().toLocaleTimeString()
    return time
}

export const getDaysDifference = (start, end) => {
    const currentDate = new Date(end)
    const eventDate = new Date(start)
    const diff = currentDate - eventDate
    const result = Math.floor(diff / (1000 * 60 * 60 * 24))
    return result
}


export const getYearsDifference = (start, end) => {
    const diff = end.getTime() - start.getTime()
    const result = Math.floor(diff / (1000 * 60 * 60 * 24 * 365))
    return result
}