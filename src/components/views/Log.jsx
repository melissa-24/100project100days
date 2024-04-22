import data from "../json/log.json"
import Log from '../cards/LogCard';


const Logs = () => {

    const completed_logs = data.filter(log => log.is_not_template)


    return (
        <>
        <h2>Testing</h2>
            {completed_logs.length == 0 ?
                <div>
                    <h3>No logs created yet</h3>
                </div>
                :
                <div>
                    <Log projects={completed_logs} />
                </div>
            }
        </>
    )
}

export default Logs