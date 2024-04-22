import { Link } from 'react-router-dom'

const Nav = () => {



    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/logs">Logs</Link>
            <Link to="/project_page_one">Project Page 1</Link>
        </nav>
    )
}

export default Nav