import { Link } from 'react-router-dom'

const Nav = () => {



    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/projects">Full Detail Project List</Link>
            <Link to="/logs">Logs</Link>
        </nav>
    )
}

export default Nav