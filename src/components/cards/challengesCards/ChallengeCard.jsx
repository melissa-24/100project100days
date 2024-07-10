import { useState } from 'react'
import { Link } from 'react-router-dom'
import Pagination from '../Pagination'
import { filtered_length, is_length, source } from '../../../utils/ChallengeHelpers'


const ChallengesCard = ({header, theChallenges}) => {

    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 4

    console.log(header, theChallenges)

    const data = source(theChallenges, header)

    const count = is_length(data)
    const jsSolved = filtered_length(data, "JavaScript")
    const pySolved = filtered_length(data, "Python")

    const totalPages = Math.ceil(data.length / itemsPerPage)

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)

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
                    {currentItems.map(( chall ) => {
                        return(
                            <div id={ chall.id } key={ chall.id } className='card_box'>
                                <h3>Challenge Title: { chall.challengeName }</h3>
                                <p>(Link to Source Challenge - <a href={chall.challengeSourceLink} target="_blank">{chall.source}</a>)</p>
                                <h3>Language Used: { chall.languageSolved }</h3>
                                <h3>Date Solved: { chall.dateSolved }</h3>
                                {chall.group_solved == true ?
                                    <span>
                                        <h3>Solved with other Developers</h3>
                                        <p><a href={chall.groupSolvedLink}>Group Solution Code</a></p>
                                    </span>
                                :
                                    <span>
                                        <p><a href={chall.challengeSolvedLink}>Solution Code</a></p>
                                        </span>
                                }
                            </div>
                        )
                    })}
                </div>
                <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
            </div>
        </>
    )
}

export default ChallengesCard