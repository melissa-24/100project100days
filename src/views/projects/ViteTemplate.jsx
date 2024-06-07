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
                    </div>
                )
            })}
        </div>
        
        </>
    )
}

export default ViteTemplate