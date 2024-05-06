import { Link } from 'react-router-dom'

const ProjCard = ({ title, projects }) => {

  console.log('title', title, 'projects', projects)
  
  return (
    <>
    <h2>{ title }</h2>
    <div className="projects">
      {projects.map(( project ) => {
        return(
            <div id={ project.id } key={ project.id } className="proj_box">
                <h3>Project Title: {project.title}</h3>
                {project.date_started != "" ?
                  <h3>Start Date: {project.date_started} </h3>
                :
                  <h3>Not Started</h3>
                }
                {project.is_showable == true ?
                  <Link to={`/projects/${project.id}`}>View Project</Link>
                :
                  <h4>Link coming soon</h4>
                }
            </div>
            
        )
      })}
    </div>
    </>
  );
};

export default ProjCard;