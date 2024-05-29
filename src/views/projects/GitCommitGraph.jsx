import { useEffect, useState } from 'react';
import { getCommitData } from '../../utils/gitHelper';
import { Bar } from 'react-chartjs-2';

const GitCommitGraph = () => {
  const [commitData, setCommitData] = useState(null);
  const [selectedYear, setSelectedYear] = useState('');
  const [yearsWithData, setYearsWithData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      console.log("just inside useEffect GitCommitGraph")
      const data = await getCommitData();
      console.log("Fetched commit data: ", data);
      setCommitData(data);
      setLoading(false);
      console.log("commitData", commitData, "loading", loading)

      // Extract years from commit data
      const years = data.yearsWithData.map(yearData => yearData.year);
      setYearsWithData(years);
    };

    fetchData();
  }, []);

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  if (loading) {
    return (
      <div className="loadingSpinner">
        <h3>Loading....this might take some time</h3>
        <div className="spinner">
        <div className="hive-spinner">
          <div className="heaven hexagon"></div>
          <div className="honey hexagon"></div>
          <div className="hive hexagon"></div>
        </div>
      </div>
      </div>
    );
  }

  console.log("what is loading", loading)
  const filteredLast365Days = commitData?.last365Days || [];
  const filteredData = selectedYear 
    ? commitData?.yearsWithData.find(yearData => yearData.year === selectedYear)?.commits || [] 
    : filteredLast365Days;

  console.log("Filtered Data for Selected Year:", filteredData);

  const allDaysInYear = selectedYear 
    ? Array.from({ length: 365 }, (_, i) => {
        const date = new Date(selectedYear, 0, i + 1); // Months are zero-based
        return date.toISOString().slice(0, 10); // Format: YYYY-MM-DD
      }) 
    : [];

  const commitDatesSet = new Set(filteredData);
  const commitDataForYear = allDaysInYear.map(date => commitDatesSet.has(date));
  console.log("Commit Data for Year:", commitDataForYear);

    // New: Calculate commits by month
    const commitsByMonth = {};
    filteredData.forEach(date => {
      const month = new Date(date).toLocaleString('default', { month: 'long' });
      commitsByMonth[month] = (commitsByMonth[month] || 0) + 1;
    });
    const sortedMonths = Object.keys(commitsByMonth).sort((a, b) => {
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      return months.indexOf(b) - months.indexOf(a)
    });

     // Calculate total commits
  const totalCommits = Object.values(commitsByMonth).reduce((total, commits) => total + commits, 0);

// // Prepare data for Chart.js
// const chartData = {
//   labels: sortedMonths,
//   datasets: [{
//     label: 'Commits by Month',
//     data: Object.values(commitsByMonth),
//     backgroundColor: 'rgba(75,192,192,0.2)',
//     borderColor: 'rgba(75,192,192,1)',
//     borderWidth: 1
//   }]
// };

// const chartOptions = {
//   scales: {
//     x: {
//       type: 'category', // Use category scale type for the x-axis
//       labels: sortedMonths // Provide the labels for the x-axis
//     },
//     y: {
//       beginAtZero: true // Optional: Ensure y-axis starts at zero
//     }
//   }
// };

  return (
    <div>
      <h2>Commit Graph</h2>
      <select value={selectedYear} onChange={handleYearChange}>
        <option value="">Last 365 Days</option>
        {yearsWithData.map(year => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>
      {!selectedYear && (
        <div className="commit-graph">
          {filteredLast365Days.map((date, index) => (
            <div key={index} className="commit-day active"></div>
          ))}
        </div>
      )}
      {selectedYear && (
        <div className="commit-graph">
          {commitDataForYear.map((hasCommit, index) => (
            <div key={index} className={`commit-day ${hasCommit ? 'active' : 'inactive'}`}></div>
          ))}
        </div>
      )}

<div>
        <h3>Commits by Month</h3>
        <table>
          <thead>
            <tr>
              <th>Month</th>
              <th>Commits</th>
            </tr>
          </thead>
          <tbody>
            {sortedMonths.map(month => (
              <tr key={month}>
                <td>{month}</td>
                <td>{commitsByMonth[month]}</td>
              </tr>
            ))}
            <tr>
              <td>Total</td>
              <td>{totalCommits}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <div>
      <h3>Commits by Month (Bar Graph)</h3>
      <Bar data={chartData} options={chartOptions} />
    </div> */}
    </div>
  );
};

export default GitCommitGraph;
