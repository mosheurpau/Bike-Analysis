import React from "react";
import useReview from "../../hooks/userReview";
import Cart from "../Cart/Cart";

const Reviews = () => {
  const [userReviews, setuserReviews] = useReview();
  return (
    <div>
      <div className="reviews-container">
        {userReviews.map((userReview) => (
          <Cart key={userReview.id} userReview={userReview}></Cart>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
