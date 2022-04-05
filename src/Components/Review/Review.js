import React from "react";
import CustomerReview from "../../hooks/customerReview";
import ReviewCard from "../ReviewCard/ReviewCard";

const Review = () => {
    const [rReviews, setREviews] = CustomerReview();
    return <div>
        <p className="text-3xl md:text-4xl font-bold mb-10 md:mb-20" >What Our Customer Say About Our Hosting</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center">
            {rReviews.map((review) => (
                <ReviewCard key={review.id} review={review} ></ReviewCard>
            ))}
        </div>
    </div>;
};

export default Review;
