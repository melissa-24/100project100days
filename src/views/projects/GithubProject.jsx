import { useEffect, useState } from 'react'
import { fetchAllRepos } from '../../utils/gitHelpers'

import RepoCountCard from "../../components/cards/githubApiCards/RepoCountCard"
import AllReposCard from '../../components/cards/githubApiCards/AllRepoCard'
import CommitCountCard from '../../components/cards/githubApiCards/CommitCountCard'
import AllCommitCard from '../../components/cards/githubApiCards/AllCommitCard'

const GithubProject = () => {

    const usernames = ['melissa-24', 'dojo24', 'beedevservices']
    // const usernames = ['dojo24']
    const [allRepos, setAllRepos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchCombinedRepos = async () => {
            try {
                const combinedRepos = await fetchAllRepos(usernames)
                setAllRepos(combinedRepos)
            } catch (err) {
                // console.log("Error fetching combined repositories:", err.message);
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchCombinedRepos()
    }, [])

    // console.log("allRepos in Project file",allRepos)

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
        <AllReposCard allRepos={allRepos} />
        <AllCommitCard usernames={usernames} />
        {usernames.map(username => (
            <div key={username}>
                <h2>Account information for {username}</h2>
                <RepoCountCard username={username} />
                <CommitCountCard username={username} />
            </div>
        ))}
        </>
        
    )
}

export default GithubProject