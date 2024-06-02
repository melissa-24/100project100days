import { useEffect, useState } from 'react'
import { fetchRepositories } from '../../../utils/gitHelpers'

const RepoCountCard = ({ username }) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [isPrivate, setIsPrivate] = useState(null)
    const [isPublic, setIsPublic] = useState(null)

    useEffect(() => {
        const getRepos = async () => {
            try {
                const repos = await fetchRepositories(username)
                const nonArchivedRepos = repos.filter(repo => !repo.archived)
                setData(nonArchivedRepos)
                setData(repos)
                const privateRepos = repos.filter(repo => repo.private).length
                const publicRepos = repos.length - privateRepos
                setIsPrivate(privateRepos)
                setIsPublic(publicRepos)
                const pubRep = repos.filter(repo => !repo.private)
                // console.log("show public repo list", pubRep)
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

    // console.log(`fetching for ${username}`,"data", data, "loading", loading, "error", error, "private count", isPrivate, "public count", isPublic)

    const count = data.length

    return (
        <>
        <h3>Total Repository Count (Includes Organization Repos) = {count}</h3>
        </>
    )
}

export default RepoCountCard