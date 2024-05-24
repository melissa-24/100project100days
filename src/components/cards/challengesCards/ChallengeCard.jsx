import { Link } from 'react-router-dom'
import { filtered_length, is_length, source } from '../../../utils/ChallengeHelpers'


const ChallengesCard = ({header, theChallenges}) => {

    console.log(header, theChallenges)

    const data = source(theChallenges, header)
    console.log(data)

    const count = is_length(data)
    const jsSolved = filtered_length(data, "JavaScript")
    const pySolved = filtered_length(data, "Python")

    // console.log('params', header, count, jsSolved, pySolved, theChallenges)

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
                    {data.map(( chall ) => {
                        return(
                            <div id={ chall.id } key={ chall.id } className='card_box'>
                                <h3>Challenge Title: { chall.challengeName }</h3>
                                <h3>Language Used: { chall.languageSolved }</h3>
                                <h3>Date Solved: { chall.dateSolved }</h3>
                                {chall.group_solved == true ?
                                    <h3>Solved with other Developers</h3>
                                :
                                    <span></span>
                                }
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default ChallengesCard