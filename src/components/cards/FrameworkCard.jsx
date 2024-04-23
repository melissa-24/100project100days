


const FrameworkCard = ({ projects }) => {
  
    return (
      <>
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
  
  