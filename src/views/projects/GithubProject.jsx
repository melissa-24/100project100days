import { useEffect, useState } from 'react'
import { fetchAllRepos } from '../../utils/gitHelpers'

import RepoCountCard from "../../components/cards/githubApiCards/RepoCountCard"
import AllReposCard from '../../components/cards/githubApiCards/AllRepoCard'

const GithubProject = () => {

    const usernames = ['melissa-24', 'dojo24', 'beedevservices']
    const [allRepos, setAllRepos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchCombinedRepos = async () => {
            try {
                const combinedRepos = await fetchAllRepos(usernames)
                setAllRepos(combinedRepos)
            } catch (err) {
                console.log("what is the error", err.message)
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchCombinedRepos()
    }, [])

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

    if (error) return <div>Error: {error}</div>


    return (
        <>
        {/* <AllReposCard username="melissa-24" />
        <AllReposCard username="dojo24" />
        <AllReposCard username="beedevservices" /> */}
        <AllReposCard allRepos={allRepos} />
        {usernames.map(username => (
            <RepoCountCard key={username} username={username} />
        ))}
        </>
        
    )
}

export default GithubProject