import { useEffect, useState } from 'react';
import { fetchRepoCount } from '../../../utils/gitHelper';

const RepoCountCard = ({ username }) => {
    const [repoCount, setRepoCount] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getRepoCount = async () => {
            try {
                const count = await fetchRepoCount(username);
                setRepoCount(count);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getRepoCount();
    }, [username]);

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
        <div className="repo-count-card">
            <h3>{username}'s Repositories</h3>
            <p>Repo Count: {repoCount}</p>
        </div>
    );
};

export default RepoCountCard;