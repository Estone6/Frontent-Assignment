import React from 'react';

const Table = ({ data }) => {
  return (
    <table className="styled-table" aria-label="Kickstarter Projects">
      <thead>
        <tr>
          <th scope="col">S.No</th>
          <th scope="col">Percentage Funded</th>
          <th scope="col">Amount Pledged</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item['percentage.funded']}</td>
            <td>{item['amt.pledged']}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
