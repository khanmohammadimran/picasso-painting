import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCustomHook from '../../Hooks/useCustomHook';
import AddReview from '../Dashboard/AddReview';
import AllReviews from './AllReviews';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import News from './News'

const Home = () => {
    const [tools, setTools] = useState([]);
    const navigate = useNavigate();
    const navigateToToolsDetail = _id => {
        navigate(`/purchase/${_id}`)
    }
    useEffect(() => {
        fetch('http://localhost:5000/tools')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])




    return (
        <div>
            <Banner></Banner>
            <div className='bg-white'>
                <div className='text-center py-8'>
                    <h2 className="btn btn-ghost normal-case text-4xl font-josefin text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Picasso Painting</h2>
                </div>
                <div className='grid lg:grid-cols-3 gap-8'>
                    {
                        tools.slice(0, 6).reverse().map(tool => <div key={tool._id} className="card w-96 mx-auto bg-base-100 shadow-xl border-2">
                            <figure><img src={tool.img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title font-raleway">Name: {tool.name}</h2>
                                <p className='font-raleway'><strong>Description:</strong> {tool.description}</p>
                                <p className='font-sans'><strong>Minimum Quantity:</strong> {tool.minimumOrderQuantity}</p>
                                <p className='font-sans'><strong>Available Quantity:</strong> {tool.availableQuantity}</p>
                                <p className='font-sans'><strong>Price:</strong> ${tool.price}</p>
                                <div className="card-actions justify-start">
                                    <button onClick={() => navigateToToolsDetail(tool._id)} className='btn btn-ghost border-0 font-sans text-white w-full max-w-xs bg-gradient-to-r from-purple-400 to-pink-600'>Purchase Now</button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                <div className='text-center py-8'>
                    <h2 className="font-bold normal-case text-4xl font-josefin text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Business Summary</h2>
                </div>
                <div className="stats stats-vertical lg:stats-horizontal shadow grid justify-center lg:justify-evenly">

                    <div className="stat">
                        <div className="stat-title font-bold text-xl font-josefin text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Customers</div>
                        <div className="stat-value">250+</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title font-bold text-xl font-josefin text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Annual Revenue</div>
                        <div className="stat-value">57k+</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title font-bold text-xl font-josefin text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">New Reviews</div>
                        <div className="stat-value">20+</div>

                    </div>

                </div>
                <div className='text-center py-8'>
                    {/* <h2 className="btn btn-ghost normal-case text-4xl font-josefin text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Reviews</h2>
                    {
                        reviews.map((review) => (
                            <AddReview
                                key={review._id}
                                review={review}

                            ></AddReview>
                        ))
                    } */}
                    <AllReviews></AllReviews>
                </div>
            </div>
            <Gallery></Gallery>
            <News></News>
        </div>
    );
};

export default Home;