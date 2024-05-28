import { useEffect, useState } from 'react';
import { getCommitData } from '../../utils/gitHelper';

const GitCommitGraph = () => {
  const [commitData, setCommitData] = useState(null);
  const [selectedYear, setSelectedYear] = useState('');
  const [yearsWithData, setYearsWithData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCommitData();
      console.log("Fetched commit data: ", data);
      setCommitData(data);
      setLoading(false);

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
      <div className="spinner">
        <div className="hive-spinner">
          <div className="heaven hexagon"></div>
          <div className="honey hexagon"></div>
          <div className="hive hexagon"></div>
        </div>
      </div>
    );
  }

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
    </div>
  );
};

export default GitCommitGraph;
