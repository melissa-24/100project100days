import { Link } from 'react-router-dom'

const ProjCard = ({ title, projects }) => {

  console.log('title', title, 'projects', projects)

  // {project.date_started !== "" ? (
  //   project.is_showable ? (
  //     <h3>Start Date: {project.date_started}</h3>
  //   ) : (
  //     <h3>Project not showable</h3>
  //   )
  // ) : (
  //   <h3>Not Started</h3>
  // )}
  
  return (
    <>
    <h2>{ title }</h2>
    <div className="projects">
      {projects.map(( project ) => {
        return(
            <div id={ project.id } key={ project.id } className="proj_box">
                <h3>Project Title: {project.title}</h3>
                {/* Check if Started */}
                {/* Check if Showable */}
                {/* Check if External */}
                {/* Check if Finished */}
                {/* Check if Idea */}

                {project.date_started != "" ?
                  <h3>Start Date: {project.date_started} </h3>
                :
                  <h3>Not Started</h3>
                }
                {project.is_finished != true ?
                  <span></span>
                :
                  <h3>Finished Date: {project.date_finished}</h3>
                }
                {project.is_showable == true ?
                  <Link to={`/projects/${project.id}`}>View Project</Link>
                :
                  <h4>Link coming soon</h4>
                }
                {project.is_external != true ?
                  <span></span>
                :
                  <h3><Link to={`${project.external_link}`} target="_blank">{project.title} Link</Link></h3>
                }
            </div>
            
        )
      })}
    </div>
    </>
  );
};

export default ProjCard;