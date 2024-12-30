import React from 'react';

interface RatingProps {
  rating: number;
  maxRating: number;
}

const Rating: React.FC<RatingProps> = ({ rating, maxRating }) => {
  const stars = Array.from({ length: maxRating }, (_, index) => index < rating ? '★' : '☆');

  return (
    <div className="rating">
      {stars.map((star, index) => (
        <span key={index} className="star">{star}</span>
      ))}
    </div>
  );
};

export default Rating;
