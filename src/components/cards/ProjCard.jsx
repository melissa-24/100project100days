import { useState } from 'react'
import { Link } from 'react-router-dom'
import Pagination from './Pagination';

const ProjCard = ({ title, projects }) => {

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 3
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

  const totalPages = Math.ceil(projects.length / itemsPerPage)

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = projects.slice(indexOfFirstItem, indexOfLastItem)
  
  return (
    <>
    <h2>{ title }</h2>
    <div className="projects">
      {currentItems.map(( project ) => {
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
                {project.is_new == true ?
                  <h2 className="updated_blue_red">Updated {project.last_updated}!!!</h2>
                :
                  <span></span>
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
    <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default ProjCard;