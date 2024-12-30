import React from 'react';

type ProductReviewsProps = {
  reviews: { rating: number; comment: string }[];
};

const ProductReviews: React.FC<ProductReviewsProps> = ({ reviews }) => {
  return (
    <div className="product-reviews">
      <h3>Customer Reviews</h3>
      {reviews.map((review, index) => (
        <div key={index} className="review">
          <p>Rating: {review.rating} stars</p>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductReviews;
