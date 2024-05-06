


const FrameworkCard = ({ title, projects }) => {
  
    return (
      <>
      <h2>{ title }</h2>
      {projects.map(( project ) => {
        return(
            <tr id={ project.id } key={ project.id }>
                <td>Project Number: { project.id }</td>
                <td>Project Title: { project.title }</td>
                <td>{ project.framework_used }</td>
            </tr>
            
        )
      })}
      </>
    );
  };
  
  export default FrameworkCard;
  
  