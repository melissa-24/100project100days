import { projFilter } from "../../utils/ProjectHelper"

const ViteTemplate = () => {
    const data = projFilter("is_finished")
    console.log('is the helper working', data)

    return (
        <>
        
        
        </>
    )
}

export default ViteTemplate