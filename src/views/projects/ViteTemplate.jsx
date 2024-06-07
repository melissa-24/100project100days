import { Link } from 'react-router-dom'
import { projFilterByContent } from "../../utils/ProjectHelper"

const ViteTemplate = () => {
    // const data = projFilter("is_finished")
    // console.log('is the helper working', data)
    const data = projFilterByContent("title")
    console.log('is this helper working as well', data)

    return (
        <>
        <div className="projects">
            {data.map(( d ) => {
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
        
        </>
    )
}

export default ViteTemplate