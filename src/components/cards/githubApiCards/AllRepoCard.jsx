

const AllReposCard = ({ allRepos }) => {
    console.log("what is allRepos", allRepos)
    const totalRepoCount = allRepos.length



    return (
        <>
        <h3>Total Repository Count = {totalRepoCount}</h3>
        </>
    )
}

export default AllReposCard