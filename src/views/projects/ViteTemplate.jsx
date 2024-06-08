import { useState } from 'react'
import { Link } from 'react-router-dom'
import { projFilterByContent } from "../../utils/ProjectHelper"
import Pagination from '../../components/cards/Pagination'

const ViteTemplate = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 5
    const data = projFilterByContent("title")
    // console.log('is this helper working as well', data)

    const totalPages = Math.ceil(data.length / itemsPerPage)
    console.log('how many pages', totalPages, 'data.length', data.length)

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)

    return (
        <>
        <div className="projects">
            {currentItems.map(( d ) => {
                return(
                    <div id={d.id} key={d.id} className="proj_box">
                        <h2>Project #: {d.id}</h2>
                        <h3>Project Title: {d.title}</h3>
                        <p>{d.description}</p>
                        {d.is_showable == true ?
                            <Link to={`/projects/${d.id}`}>View Project</Link>
                        :
                            <h4>Link coming soon</h4>
                        }
                        {d.is_external != true ?
                            <span></span>
                        :
                            <h3><Link to={`${d.external_link}`} target="_blank">{d.title} Link</Link></h3>
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
        </>
    )
}

export default ViteTemplate