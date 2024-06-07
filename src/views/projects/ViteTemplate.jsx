import { projFilter, projFilterByContent } from "../../utils/ProjectHelper"

const ViteTemplate = () => {
    const data = projFilter("is_finished")
    console.log('is the helper working', data)
    const altData = projFilterByContent("title")
    console.log('is this helper working as well', altData)

    return (
        <>
        
        
        </>
    )
}

export default ViteTemplate