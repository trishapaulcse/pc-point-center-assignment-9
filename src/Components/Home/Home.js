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
                    <h1 className=' font-mono tracking-normal md:tracking-normal text-3xl md:text-4xl font-bold text-sky-400'>
                        Welcome To our Web Hosting Review Website
                    </h1>
                    <p className='font-bold'>
                        You scrolled this far. That's impressive! The best way to pick a web hosting provider is to try the services. All our Customer come with a 30-day money back guarantee. If you do not like what you get - we will refund your purchase. No questions asked
                    </p>
                    <Link to='/'>
                        <button class=" mt-10 p-5 bg-red-300 text-black font-bold rounded-none ...">Check Live Demo</button>
                    </Link>

                </div>
                <div>
                    <img src="image/banner.jpg" alt="hosting review website logo" srcset="" />
                </div>
            </div>
            <div>
                <p className='text-2xl md:text-5xl text-center font-bold mt-5 md:m-19'>Our Client FeedBack</p>
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
                        <button class=" mt-10 p-5 bg-red-300 text-black font-bold rounded-none ...">See all Review</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;