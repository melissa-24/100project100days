import { useEffect, useState } from "react"
import githubService from "../../services/gitService";


const GitContributionsGraph = () => {

    const [totalContributions, setTotalContributions] = useState(0);
  const username = 'melissa-24'; // Replace with your GitHub username

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const events = await githubService.getUserEvents(username);
        // Filter events to count contributions (commits, PRs, issues, etc.)
        setTotalContributions(events.length);
      } catch (error) {
        console.error('Error fetching GitHub events:', error);
      }
    };

    fetchContributions();
  }, [username]);


    console.log("totalContributions", totalContributions)


    return (
        <>
            <h3>Git Contributions for All Accounts</h3>
            <p>Total Contributions: {totalContributions}</p>
        </>
    )
}

export default GitContributionsGraph