


const Test = ({ logs }) => {
  
  return (
    <>
    {logs.map(( log ) => {
      return(
          <div id={ log.day } key={ log.day }>
              <h2>Day: {log.day}</h2>
              <h2>Project Title: {log.date}</h2>
          </div>
          
      )
    })}
    </>
  );
};

export default Test;

