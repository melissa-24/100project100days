


const ProjCard = ({ projects }) => {
  
  return (
    <>
    {projects.map(( project ) => {
      return(
          <div id={ project.day } key={ project.day }>
              <h2>Day: {project.day}</h2>
              <h2>Project Title: {project.title}</h2>
          </div>
          
      )
    })}
    </>
  );
};

export default ProjCard;

