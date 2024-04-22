


const ProjCard = ({ projects }) => {
  
  return (
    <>
    {projects.map(( project ) => {
      return(
          <div id={ project.day } key={ project.day }>
              <h2>Project: {project.day}</h2>
              <h2>Project Title: {project.title}</h2>
              <p>{project.description}</p>
          </div>
          
      )
    })}
    </>
  );
};

export default ProjCard;

