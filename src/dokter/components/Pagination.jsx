import React, { useState } from 'react';

    function Pagination({ totalPages, handleClick }) {
    const [currentPage, setCurrentPage] = useState(1);

    const handleNextClick = () => {
        setCurrentPage(currentPage + 1);
        handleClick(currentPage + 1);
    };

    const handlePreviousClick = () => {
        setCurrentPage(currentPage - 1);
        handleClick(currentPage - 1);
    };

    const handlePageClick = (event, pageNumber) => {
        event.preventDefault();
        setCurrentPage(pageNumber);
        handleClick(pageNumber);
    };

    const getPageNumbers = () => {
        const pageNumbers = [];

        for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
            <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
            <a className="page-link" href="#" onClick={(event) => handlePageClick(event, i)}>
                {i}
            </a>
            </li>
        );
        }

        return pageNumbers;
    };

    return (
        <nav>
        <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <a className="page-link" href="#" onClick={handlePreviousClick}>
                Previous
            </a>
            </li>
            {getPageNumbers()}
            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <a className="page-link" href="#" onClick={handleNextClick}>
                Next
            </a>
            </li>
        </ul>
        </nav>
    );
    }

export default Pagination;