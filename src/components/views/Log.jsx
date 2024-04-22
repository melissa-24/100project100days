import logData from "../json/log.json"
import TheLogs from '../cards/LogCard';


const Logs = () => {

    const completed_logs = logData.filter(log => log.is_not_template)


    return (
        <>
            {completed_logs.length == 0 ?
                <div>
                    <h3>No logs created yet</h3>
                </div>
                :
                <div>
                    <TheLogs theData={completed_logs} />
                </div>
            }
        </>
    )
}

export default Logs