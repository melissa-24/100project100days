import { getDate } from "../utils/Helper"

const Footer = () => {
    const today = getDate()

    return (
        <footer>
            <h3>By Melissa Longenberger</h3>
            <h3>Todays Date: { today }</h3>
        </footer>
    )
}

export default Footer