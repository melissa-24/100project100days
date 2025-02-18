import DaysCard from "../../components/cards/dateProjectCards/daysCard"
import { getTime } from "../../utils/TimeHelpers"

const ImportantDates = () => {
    const current_time = getTime()

    return (
        <>
        <h2>The Current Time is: { current_time }</h2>

        <DaysCard filterBy={"Event"} />
        <DaysCard filterBy={"Graduation"} />
        <DaysCard filterBy={"Birthday"} />
        <DaysCard filterBy={"Anniversary"} />
        </>
    )
}

export default ImportantDates