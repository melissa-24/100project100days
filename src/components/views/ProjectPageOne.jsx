import { Link } from 'react-router-dom'
import ProjectThree from './projects/BackgroundChanger'

const ProjectPageOne = () => {


    return (
        <>
        <h2>Project #1</h2>
        <p>This is the entire Vite app that will contain links to eachof the projects that I create</p>
        <h2>Project #2</h2>
        <p>This is a daily log of what I code for the over all project.  Maybe a project takes more than one day but I coded something each day, this will just be a running log of what I am doing.</p>
        <Link to="/logs">Logs</Link>
        <h2>Project #3</h2>
        <ProjectThree />
        </>
    )
}
export default ProjectPageOne