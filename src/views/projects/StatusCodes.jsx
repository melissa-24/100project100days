import { API } from "../../utils/ApiHelpers"
import { useEffect, useState } from 'react'
import CodeModal from '../../components/cards/statusCodeCards/StatusCodeCard'




const StatusCodes = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [isCodeModelOpen, setCodeModelOpen] = useState(false)
    const [codeData, setCodeData] = useState(null)

    useEffect(() => {
        API.getStatusCodesJson()
            .then(response => {
                setData(response)
                setLoading(false)
            })
            .catch(error => {
                setError(error)
                setLoading(false)
            })
    }, [])

    const handleImageClick = (data) => {
        setCodeData(data);
        setCodeModelOpen(true);
    };

    const closeCodeModal = () => {
        setCodeModelOpen(false);
        setCodeData(null);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    console.log('the data', data)

    return (
        <>
        <div className="codes">
            {data.map(d => (
                <div key={d.id} className="statusCodes" onClick={() => handleImageClick(d)}>
                    <img src={d.display_img} alt={d.title} />
                </div>
            ))}
        </div>
        <CodeModal isOpen={isCodeModelOpen} onClose={closeCodeModal} data={codeData} />
        </>
    )
}

export default StatusCodes