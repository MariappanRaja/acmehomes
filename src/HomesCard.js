import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';



const HomesCard = ({ stay }) => {
  const {
    name,
    bedrooms,
    bathrooms,
    calendar_last_scraped,
    price,
    availability_30,
  } = stay;
  const [isFavorite, setIsFavorite] = useState(false);
  const isUsuallyBooked = availability_30 <= 5;
  const isLowRate = price <= 50; 
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  

  return (
    <div className="stay-card">
      <div className="stay-details">
        <h4 class="listing-name">{name}</h4>
        <p>{bedrooms} Bedrooms, {bathrooms} Bathrooms</p>
        <p>Date: {calendar_last_scraped}</p>
        <hr/>
        <p>Total Price:</p>
        </div>
        {isUsuallyBooked && <div className="tag usually-booked-tag">Usually booked</div>}
        {isLowRate && <div className="tag low-rate-tag">Low rate</div>}
        <div className="favorite-icon" onClick={toggleFavorite}>
        <FaHeart color={isFavorite ? 'black' : '#0000001F'} />
      </div>
      <div className="price">
        <p>${price}</p>

      </div>
    </div>
  );
};

export { HomesCard };
