


const ProjCard = ({ projects }) => {
  
  return (
    <>
    {projects.map(( project ) => {
      return(
          <div id={ project.id } key={ project.id }>
              <h2>Project: {project.id}</h2>
              <h2>Project Title: {project.title}</h2>
              <p>{project.description}</p>
          </div>
          
      )
    })}
    </>
  );
};

export default ProjCard;

