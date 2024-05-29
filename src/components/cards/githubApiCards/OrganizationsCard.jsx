import { useEffect, useState } from 'react';
import { fetchOrganizations } from '../../../utils/gitHelper';

const OrgCard = ({ username }) => {
    const [orgs, setOrgs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getOrgs = async () => {
            try {
                const orgs = await fetchOrganizations(username);
                setOrgs(orgs);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getOrgs();
    }, [username]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="org-card">
            <h3>{username}'s Organizations</h3>
            <ul>
                {orgs.map(org => (
                    <li key={org.id}>{org.login}</li>
                ))}
            </ul>
        </div>
    );
};

export default OrgCard;
