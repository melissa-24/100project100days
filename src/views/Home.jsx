import projects from "../json/projects.json"
// import FrameworkCard from "../components/cards/FrameworkCard"
import ProjCard from "../components/cards/ProjCard"


const Home = () => {

    const completed_projects = projects.filter(project => project.is_finished)
    const started_projects = projects.filter(project => project.is_started)
    const coming_projects = projects.filter(project => project.is_idea)
    const external_projects = projects.filter(project => project.is_external)
    const project_frameworks = projects.filter(project => project.framework_chosen)
    const done_length = completed_projects.length
    const started_length = started_projects.length
    const coming_length = coming_projects.length
    const external_length = external_projects.length

    return (
        <>
            <ProjCard title={"Completed Projects"} projects={completed_projects} />
            <ProjCard title={"Projects Started"} projects={started_projects} />
            <ProjCard title={"Project Ideas"} projects={coming_projects} />
        </>
    )
}

export default Home