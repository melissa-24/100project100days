export const lang = (data, theLang) => {
    return data.filter(d => d.languageSolved === theLang)
}

export const source = (data, theSource) => {
    return data.filter(d => d.source === theSource)
}

export const is_length = (data) => {
    return data.length
}

export const filtered_length = (data, theLang) => {
    return data.filter(d => d.languageSolved === theLang).length
}