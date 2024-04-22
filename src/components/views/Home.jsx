import projects from "../json/projects.json"
import Proj from '../cards/ProjCard';


const Home = () => {

    const completed_projects = projects.filter(project => project.is_finished)
    const started_projects = projects.filter(project => project.is_started)
    const coming_projects = projects.filter(project => project.is_idea)


    return (
        <>
            <h2>Completed Projects</h2>
            {completed_projects.length == 0 ?
                <div>
                    <h3>No projects finished yet</h3>
                </div>
                :
                <div>
                    <Proj projects={completed_projects} />
                </div>
            }
            <h2>Projects that have been Started</h2>
            {started_projects.length == 0 ?
                <div>
                    <h3>No projects started yet</h3>
                </div>
                :
                <div>
                    <Proj projects={started_projects} />
                </div>
            }
            <h2>Project ideas</h2>
            {coming_projects.length == 0 ?
                <div>
                    <h3>No more project Ideas at this time</h3>
                </div>
                :
                <div>
                    <Proj projects={coming_projects} />
                </div>
            }
        </>
    )
}

export default Home