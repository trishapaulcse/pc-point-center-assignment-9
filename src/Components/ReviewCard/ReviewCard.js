import React from "react";

const ReviewCard = ({ review }) => {
    console.log(review);
    return (
        <div className="shadow-lg rounded-2xl w-[350px] bg-white p-4 mb-4">
            <div className="flex gap-4 justify-between items-center">

                <div className="flex flex-col justify-end">
                    <span className="text-black-600 font-medium font-bold">{review.name}</span>
                    <span className="text-orange-600 text-xs font-bold">Rating:{review.rating}</span>
                    <span className="text-gray-600 font-medium">{review.review}</span>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
