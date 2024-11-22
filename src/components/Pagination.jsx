import React from 'react';

const Pagination = ({ totalRecords, recordsPerPage, currentPage, paginate }) => {
  const totalPages = Math.ceil(totalRecords / recordsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1);
    }
  };

  return (
    <nav className="pagination-container" aria-label="Pagination">
      <button
        className="pagination-arrow"
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        aria-label="Go to previous page"
      >
        &lt; {/* Left arrow */}
      </button>
      <span className="current-page" aria-current="page">
        {currentPage}
      </span>
      <button
        className="pagination-arrow"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        aria-label="Go to next page"
      >
        &gt; {/* Right arrow */}
      </button>
    </nav>
  );
};

export default Pagination;
