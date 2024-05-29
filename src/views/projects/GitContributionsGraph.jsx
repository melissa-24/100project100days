import { API } from "../../utils/ApiHelpers"
import { useEffect, useState } from "react"

const GitContributionsGraph = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


// API.getGitOrgRepos('orgname');
// API.getUserRepos('username');
// API.getUserOrgRepos('username', 'orgname');
// API.getRepoCommits('owner', 'repo')


    useEffect(() => {
        API.getUserRepos('melissa-24')
        .then(response => {
            setData(response)
            setLoading(false)
        })
        .catch(error => {
            setError(error)
            setLoading(false)
        })
    })

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    )
}

export default GitContributionsGraph