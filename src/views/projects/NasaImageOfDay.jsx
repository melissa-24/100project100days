import { API } from "../../utils/ApiHelpers"
import { useEffect, useState } from 'react'

const NasaImageOfDay = () => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        API.getNasaApod()
            .then(response => {
                setData(response)
                setLoading(false)
            })
            .catch(error => {
                setError(error)
                setLoading(false)
            })
    }, [])

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    console.log('the data', data)
    console.log('data.title', data.title, 'data.url', data.url)


    return (
        <>
        <h1>Nasa Astronomy Photo of the Day</h1>
        <div className="nasa">
            <h3>{data.title} - {data.date}</h3>
            <img src={data.url} alt={data.title} className="nasa_image" />
            <div className="nasa_caption">
                <p>{data.explanation}</p>
            </div>
        </div>
        </>
    )
}

export default NasaImageOfDay