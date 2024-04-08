import React, { useState } from 'react';
import { HomesCard } from './HomesCard';
import './Home.css';

const HomesList = ({ stays, showPagination }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = stays.slice(indexOfFirstCard, indexOfLastCard);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    
    <div className="stay-list">
      {currentCards.map((stay, index) => (
        <HomesCard key={index} stay={stay} />
      ))}
      {showPagination && ( 
      <div className="pagination-info">
       Showing {indexOfFirstCard + 1}-{Math.min(indexOfLastCard, stays.length)} of {stays.length}
      </div>
       )}
      {showPagination && (
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
        <button onClick={handleNextPage} disabled={indexOfLastCard >= stays.length}>Next</button>
      </div>
       )}
     
    </div>
  );
};

export { HomesList };
