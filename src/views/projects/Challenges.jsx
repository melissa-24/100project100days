import { is_length, filtered_length } from "../../utils/ChallengeHelpers"
import { getDate } from "../../utils/TimeHelpers"
import ChallengesVSCard from "../../components/cards/challengesCards/ChallengesVSCard"
import ChallengesCard from "../../components/cards/challengesCards/ChallengeCard"
import { API } from "../../utils/ApiHelpers"
import { useEffect, useState} from 'react'


const Challenges = () => {
    const today = getDate()
    const cw = "CodeWars"
    const hr = "HackerRank"
    const lc = "LeetCode"
    const misc = "Misc"

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        API.getChallengesJson()
        .then(res=> {
            setData(res)
            setLoading(false)
        })
        .catch(error => {
            setError(error)
            setLoading(false)
        })
    }, [])

    console.log('data', data, 'loading', loading, 'error', error)

    if (loading) return <div>Loading ...</div>
    if (error) return <div>Error: {error.message}</div>

    const solved = data.filter(chall => !chall.isTemplate)

    const totalSolved = is_length(solved)
    const totalJS = filtered_length(solved, "JavaScript")
    const totalPy = filtered_length(solved, "Python")
    const totalOther = totalSolved - (totalJS + totalPy)


    return (
        <>
        <h2>Total Challenges Solved as of { today }: { totalSolved }</h2>
        <ChallengesVSCard one="JavaScript" two="Python" three="Other Languages" countOne={totalJS} countTwo={totalPy} countThree={totalOther} />
        <div className="challCard">
            <ChallengesCard header={cw} theChallenges={solved} />
            <ChallengesCard header={hr} theChallenges={solved} />
            <ChallengesCard header={lc} theChallenges={solved} />
            <ChallengesCard header={misc} theChallenges={solved} />
        </div>
        </>
        
    )
}

export default Challenges