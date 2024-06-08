import { useState } from 'react';
import logData from "../json/log.json";
import LogCard from '../components/cards/LogCard';
import Pagination from '../components/cards/Pagination';

const Logs = () => {
    const logsPerPage = 5; // Number of logs to display per page
    const [currentPage, setCurrentPage] = useState(1);

    const completedLogs = logData.filter(log => log.is_not_template);

    // Calculate the total number of pages
    const totalPages = Math.ceil(completedLogs.length / logsPerPage);

    // Get the logs to display on the current page
    const startIndex = (currentPage - 1) * logsPerPage;
    const currentLogs = completedLogs.slice(startIndex, startIndex + logsPerPage);

    return (
        <>
            {completedLogs.length === 0 ? (
                <div>
                    <h3>No logs created yet</h3>
                </div>
            ) : (
                <div>
                    <LogCard theData={currentLogs} />
                    <Pagination 
                        totalPages={totalPages} 
                        currentPage={currentPage} 
                        setCurrentPage={setCurrentPage} 
                    />
                </div>
            )}
        </>
    );
};

export default Logs;
