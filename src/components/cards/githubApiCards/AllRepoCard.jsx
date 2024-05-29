import { useEffect, useState } from 'react'
import { fetchRepositories } from '../../../utils/gitHelpers'

const AllReposCard = ({ username }) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const getRepos = async () => {
            try {
                const repos = await fetchRepositories(username)
                setData(repos)
            } catch(err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        getRepos()
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

    console.log("data", data, "loading", loading, "error", error)

    return (
        <>
        <h3>{username}'s Repositories</h3>
        </>
    )
}

export default AllReposCard