export const getDate = () => {
    const date = new Date().toLocaleDateString()
    console.log("date ln 2 Helper.js",date)
    return date
};

export const getTime = () => {
    const time = new Date().toLocaleTimeString()
    console.log("current time line 8 helper.js", time)
    return time
}

export const getDaysDifference = (start, end) => {
    const currentDate = new Date(end)
    const eventDate = new Date(start)
    const diff = currentDate - eventDate
    console.log('the diff', diff)
    const result = Math.floor(diff / (1000 * 60 * 60 * 24))
    console.log('diff line 14 helper.js', diff, 'result line 15 helper.js', result)
    return result
}


export const getYearsDifference = (start, end) => {
    const diff = end.getTime() - start.getTime()
    const result = Math.floor(diff / (1000 * 60 * 60 * 24 * 365))
    console.log('diff line 21 helper.js', diff, 'result line 22 helper.js', result)
    return result
}