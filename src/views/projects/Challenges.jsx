import theChallenges from "../../json/challenges.json"
import { is_length, lang, source } from "../../utils/ChallengeHelpers"
import { getDate } from "../../utils/TimeHelpers"
import ChallengesVSCard from "../../components/cards/challengesCards/ChallengesVSCard"
import ChallengesCard from "../../components/cards/challengesCards/ChallengeCard"
import { API } from "../../utils/ApiHelpers"
import { useEffect, useState} from 'react'


const Challenges = () => {
    const today = getDate()
    const solved = theChallenges.filter(chall => chall.isTemplate == false)
    const py = "Python"
    const js = "JavaScript"
    const cw = "CodeWars"
    const hr = "HackerRank"
    const lc = "LeetCode"
    const misc = "Misc"

    const the_cw = source(solved, cw)
    const the_hr = source(solved, hr)
    const the_lc = source(solved, lc)
    const the_misc = source(solved, misc)

    const the_py = lang(solved, py)
    const the_js = lang(solved, js)
    const cw_py = lang(the_cw, py)
    const cw_js = lang(the_cw, js)
    const hr_py = lang(the_cw, py)
    const hr_js = lang(the_cw, js)
    const lc_py = lang(the_cw, py)
    const lc_js = lang(the_cw, js)
    const misc_py = lang(the_misc, py)
    const misc_js = lang(the_misc, js)

    const total_solved = is_length(solved)
    const total_py = is_length(the_py)
    const total_js = is_length(the_js)
    const total_cw = is_length(the_cw)
    const total_hr = is_length(the_hr)
    const total_lc = is_length(the_lc)
    const total_misc = is_length(the_misc)
    const total_cw_py = is_length(cw_py)
    const total_cw_js = is_length(cw_js)
    const total_hr_py = is_length(hr_py)
    const total_hr_js = is_length(hr_js)
    const total_lc_py = is_length(lc_py)
    const total_lc_js = is_length(lc_js)
    const total_misc_py = is_length(misc_py)
    const total_misc_js = is_length(misc_js)

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


    return (
        <>
        {/* <h2>Total Challenges Solved as of { today }: { total_solved }</h2>
        <ChallengesVSCard one={js} two={py} countOne={total_js} countTwo={total_py} />
        <div className="challCard">
            <ChallengesCard header={cw} count={total_cw} jsSolved={total_cw_js} pySolved={total_cw_py} theChallenges={the_cw} />
            <ChallengesCard header={hr} count={total_hr} jsSolved={total_hr_js} pySolved={total_hr_py} theChallenges={the_hr} />
            <ChallengesCard header={lc} count={total_lc} jsSolved={total_lc_js} pySolved={total_lc_py} theChallenges={the_lc} />
            <ChallengesCard header={misc} count={total_misc} jsSolved={total_misc_js} pySolved={total_misc_py} theChallenges={the_misc} />
        </div> */}
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        </>
        
    )
}

export default Challenges