import { useEffect, useState } from 'react';
import { fetchCommitsForAllUsers } from '../../../utils/gitHelpers';

const AllCommitCard = ({ usernames }) => {
    const [commitCount, setCommitCount] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getCommits = async () => {
            try {
                const allCommits = await fetchCommitsForAllUsers(usernames);
                setCommitCount(allCommits.length);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        getCommits();
    }, [usernames]);

    if (loading) {
        return (
            <div className="loadingSpinner">
                <h3>Loading....this might take some time</h3>
                <div className="spinner">
                    <div className="hive-spinner">
                        <div className="heaven hexagon"></div>
                        <div className="honey hexagon"></div>
                        <div className="hive hexagon"></div>
                    </div>
                </div>
            </div>
        );
    }

    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <h3>Total Lifetime Commits for All Users: {commitCount}</h3>
        </>
    );
};

export default AllCommitCard;
