import { getDate, getTime, getDaysDifference, getYearsDifference } from "../../../utils/Helper"
import theDates from '../../../json/dates.json'
import { useState, useEffect } from "react"

const DaysCard = ({ filterBy }) => {

    const theFilter = filterBy

    const [eventResults, setEventResults] = useState([])


    useEffect(() => {
        const today = getDate()
        const eventProjects = theDates.filter(date => date.category === theFilter)
        const results = []

        eventProjects.forEach(date => {
            const eventDate = date.date
            const diff = getDaysDifference(eventDate, today)
            results.push({ eventName: date.title, couple: date.couple, daysDifference: diff, person: date.name })
        })

        setEventResults(results)
    }, [])


    return (
        <>
        <h3>{theFilter}:</h3>
        <div className="projects">
            {eventResults.map(( result ) => {
                return(
                    <div id={result.id} key={result.id} className="proj_box">
                        <p>{result.eventName} - {result.daysDifference} days ago</p>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default DaysCard