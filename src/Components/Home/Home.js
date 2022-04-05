import React from 'react';
import { Link } from 'react-router-dom';
import CustomerReview from '../../hooks/customerReview';
import ReviewCard from '../ReviewCard/ReviewCard';


const Home = () => {
    const [rReviews, setREviews] = CustomerReview();
    return (
        <div >
            <div class="grid grid-cols-1 md:grid-cols-2 m-15 md:m-10">
                <div className='m-5 md:m-10'>
                    <h1 className=' font-mono tracking-normal md:tracking-normal text-3xl md:text-4xl font-bold text-red-400'>
                        Welcome To our site
                    </h1>
                    <p className=''>
                        Welcome to our pc point center! We're so excited to have you as part of our team.
                        We're glad you've choosen us, and we want to show our appreciation by giving you a special incentive.
                        We're delighted to have you as our customer. ...
                        Thank you for joining us!!!!!!
                    </p>
                    <Link to='/'>
                        <button class=" mt-10 p-5 bg-blue-300 text-black font-semibold rounded-none ...">Live Demo</button>
                    </Link>

                </div>
                <div className='flex justify-center'>
                    <img src="images/pc.jpg" alt="" srcset="" />
                </div>
            </div>
            <div>
                <p className='text-2xl md:text-4xl text-center font-semibold mt-5 md:m-19'>Client FeedBack</p>
            </div>
            <div>
                <div className='mb-10'>
                    <div class="grid grid-cols-1 md:grid-cols-3 m-15 md:m-10">
                        {
                            rReviews.slice(0, 3).map((review) => (
                                <ReviewCard key={review.id} review={review} ></ReviewCard>
                            ))
                        }
                    </div>
                    <Link to='/review'>
                        <button class=" mt-10 p-5 bg-blue-300 text-black font-semibold rounded-none ...">See all Review</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;