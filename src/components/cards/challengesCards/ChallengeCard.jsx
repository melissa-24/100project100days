import { Link } from 'react-router-dom'


const ChallengesCard = ({header, count, jsSolved, pySolved, theChallenges}) => {

    console.log('params', header, count, jsSolved, pySolved, theChallenges)

    return (
        <>
            <div className="challs">
                <h2>{ header }</h2>
                <table>
                    <tr>
                        <th># Solved</th>
                        <td>{ count }</td>
                    </tr>
                    <tr>
                        <th>Solved in JavaScript</th>
                        <td>{ jsSolved }</td>
                    </tr>
                    <tr>
                        <th>Solved in Python</th>
                        <td>{ pySolved }</td>
                    </tr>
                </table>
                <div className="cards">
                    {theChallenges.map(( chall ) => {
                        return(
                            <div id={ chall.id } key={ chall.id } className='card_box'>
                                <h3>Challenge Title: { chall.challengeName }</h3>
                                <h3>Language Used: { chall.languageSolved }</h3>
                                <h3>Date Solved: { chall.dateSolved }</h3>
                                
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default ChallengesCard