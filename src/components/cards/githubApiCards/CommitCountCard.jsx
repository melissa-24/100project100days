import { useEffect, useState } from 'react'
import { fetchAllCommitsForUser } from '../../../utils/gitHelpers'


const CommitCountCard = ({ username }) => {

    const [theCommits, setTheCommits] = useState(null)
    const [commitCount, setCommitCount] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        // console.log("commit useEffect triggered", username)
        const getCommits = async () => {
            try {
                const commits = await fetchAllCommitsForUser(username)
                setTheCommits(commits)
                setCommitCount(commits.length)
            } catch (err) {
                // console.error("Error fetching commits:", err.message);
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        getCommits()
    }, [username])

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

    console.log("theCommits", theCommits, "commitCount", commitCount)
    return (
        <>
        <h3>Lifetime total commits: {commitCount}</h3>
        </>
    )
}

export default CommitCountCard