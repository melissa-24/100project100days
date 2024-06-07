import { projFilter } from "../utils/ProjectHelper"
import ProjCard from "../components/cards/ProjCard"


const Home = () => {

    const completed_projects = projFilter("is_finished")
    const started_projects = projFilter("is_started")
    const coming_projects = projFilter("is_idea")


    return (
        <>
            <ProjCard title={"Completed Projects"} projects={completed_projects} />
            <ProjCard title={"Projects Started"} projects={started_projects} />
            <ProjCard title={"Project Ideas"} projects={coming_projects} />
        </>
    )
}

export default Home