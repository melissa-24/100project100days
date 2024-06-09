import { API } from "../../utils/ApiHelpers"
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const ImagesApi = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        API.getCategories()
            .then(response => {
            setData(response);
            setLoading(false);
            })
            .catch(error => {
            setError(error);
            setLoading(false);
            });
    }, []);
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;


    return (
        <>
        <h1>Categories From API</h1>
        <h2><Link to="https://ninja-api.navyladyveteran.com/" target="_blank">Base API Url</Link> </h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    )
}

export default ImagesApi