import OrgCard from '../../components/cards/githubApiCards/OrganizationsCard'
import RepoCountCard from '../../components/cards/githubApiCards/RepoCountCard'

const GitRepos = () => {



    return (
        <>
        <RepoCountCard username="melissa-24" />
        <OrgCard username="melissa-24" />
        <RepoCountCard username="dojo24" />
        <RepoCountCard username="beedevservices" />
        <RepoCountCard username="techByteLearning" />
        </>
    )
}

export default GitRepos