import { getDate, getTime, getDaysDifference, getYearsDifference } from "../../utils/Helper"
import theDates from '../../json/dates.json'

const ImportantDates = () => {

    const today = getDate()
    console.log("today ln6 ImportantDates.jsx", today)
    const current_time = getTime()

    return (
        <>
        <h2>The Current Time is: { current_time }</h2>
        <h2>Based off of a site I made for my Anniversary this one is all about the important dates in my life</h2>
        <p>If you would like to see the original site I made here is the link: <a href="https://melissa-24.github.io/anniversaryHusband/" target="_blank" rel="noopener noreferrer">Anniversary Site</a></p>
        </>
    )
}

export default ImportantDates