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
            {/* <ChallengesCard header={hr} count={total_hr} jsSolved={total_hr_js} pySolved={total_hr_py} theChallenges={the_hr} />
            <ChallengesCard header={lc} count={total_lc} jsSolved={total_lc_js} pySolved={total_lc_py} theChallenges={the_lc} />
            <ChallengesCard header={misc} count={total_misc} jsSolved={total_misc_js} pySolved={total_misc_py} theChallenges={the_misc} /> */}
        </div>
        </>
        
    )
}

export default Challenges