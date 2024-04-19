

const TestCard = ({ match }) => {
    const projectId = match.params.id; // Accessing the project ID from the URL
  
    return (
      <div>
        <h2>Project Details</h2>
        <p>Project ID: {projectId}</p>
        <p>This is a mock page for project {projectId}. You can replace this content with actual project details.</p>
      </div>
    );
  };
  
  export default TestCard;

