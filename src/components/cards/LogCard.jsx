


const LogCard = ({ theData }) => {

  return (
    <>
    {theData.map(( aLog ) => {
      return(
        <div id={ aLog.day } key={aLog.day}>
          <h2>Day: {aLog.day}</h2>
          <p>{aLog.content}</p>
        </div>
      )
    })}
    </>
  )
}

export default LogCard