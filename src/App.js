import React, { useEffect, useState } from 'react';

import Pagination from './components/Pagination';
import Table from './components/Table';

import './styles/index.css';

const App = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const recordsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data.');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <p role="alert" aria-live="polite">Loading...</p>;
  }

  if (error) {
    return <p role="alert" aria-live="polite" style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <div className="container">
      <h1>Kickstarter Projects</h1>
      <Table data={currentRecords} />
      <Pagination
        totalRecords={data.length}
        recordsPerPage={recordsPerPage}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
