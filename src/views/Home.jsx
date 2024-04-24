import projects from "../json/projects.json"
import FrameworkCard from "../components/cards/FrameworkCard"


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
        <table className="homeTable">
            <tr>
                <th colSpan={2}>Projects Started</th>
            </tr>
            {started_projects.length == 0 ?
            <tr>
                <td colSpan={2}>No projects started yet</td>
            </tr>
            :
            <tr>
                <td># Started</td>
                <td>{ started_length }</td>
            </tr>
            }
        </table>
        <table className="homeTable">
            <tr>
                <th colSpan={2}>Projects Finished</th>
            </tr>
            {completed_projects.length == 0 ?
            <tr>
                <td colSpan={2}>No projects finished yet</td>
            </tr>
            :
            <tr>
                <td># Finished</td>
                <td>{ done_length }</td>
            </tr>
            }
        </table>
        <table className="homeTable">
            <tr>
                <th colSpan={2}>Project Planned</th>
            </tr>
            {coming_projects.length == 0 ?
            <tr>
                <td colSpan={2}>No projects planned yet</td>
            </tr>
            :
            <tr>
                <td># Planned</td>
                <td>{ coming_length }</td>
            </tr>
            }
        </table>
        <table className="homeTable">
            <tr>
                <th colSpan={2}>Projects with External Links</th>
            </tr>
            {external_projects.length == 0 ?
            <tr>
                <td colSpan={2}>No projects outside of this App yet</td>
            </tr>
            :
            <tr>
                <td># Created External to App</td>
                <td>{ external_length }</td>
            </tr>
            }
        </table>
        <table className="homeTable">
            <tr>
                <th colSpan={3}>Frameworks used</th>
            </tr>
            {project_frameworks.length == 0 ?
            <tr>
                <td colSpan={3}>No frameworks decided yet</td>
            </tr>
            :
            <FrameworkCard projects={project_frameworks} />
            }
        </table>
        </>
    )
}

export default Home