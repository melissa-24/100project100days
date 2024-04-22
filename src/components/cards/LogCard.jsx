


const LogCard = ({ theLogs }) => {

  return (
    <>
    <h2>Test</h2>
    {theLogs.map(( aLog ) => {
      return(
        <div id={ aLog.day } key={aLog.day}>
          <h2>Day: {aLog.day}</h2>
        </div>
      )
    })}
    </>
  )
}

export default LogCard