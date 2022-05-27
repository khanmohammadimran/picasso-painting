import React, { useEffect, useState } from 'react';

const AllReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/review")
            .then((res) => res.json())
            .then((data) => {
                setReviews(data);
            });
    }, []);
    console.log(reviews)
    return (
        <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
            {
                reviews.map(review => <div key={review._id} className="card bg-base-100 shadow-xl">
                    <div className="avatar placeholder">
                        <div className="mx-auto bg-neutral-focus text-neutral-content rounded-full w-24">
                            <span className="text-3xl">{review.name.slice(0, 1)}</span>
                        </div>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{review.name}</h2>
                        <p>{review.review}</p>
                    </div>
                </div>)
            }
        </div>
    );
};

export default AllReviews;