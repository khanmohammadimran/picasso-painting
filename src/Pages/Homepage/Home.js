import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from './Banner/Banner';

const Home = () => {
    const [tools, setTools] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('tools.json')
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
                <div className='grid lg:grid-cols-3'>
                    {
                        tools.slice(0, 6).map(tool => <div key={tool.id} class="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={tool.img} alt="Shoes" /></figure>
                            <div class="card-body">
                                <h2 class="card-title">Name: {tool.name}</h2>
                                <p>Description: {tool.description}</p>
                                <p>Minimum Quantity: {tool.minimumOrderQuantity}</p>
                                <p>Available Quantity: {tool.availableQuantity}</p>
                                <p>Price: ${tool.price}</p>
                                <div class="card-actions justify-start">
                                    <button onClick={() => navigate('/purchase')} className="btn btn-primary">Purchase Now</button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                <div className='text-center py-8'>
                    <h2 className="btn btn-ghost normal-case text-4xl font-josefin text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Business Summary</h2>
                </div>
                <div class="stats stats-vertical lg:stats-horizontal shadow grid justify-center lg:justify-evenly">

                    <div class="stat">
                        <div class="stat-title font-bold text-xl font-josefin text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Customers</div>
                        <div class="stat-value">250+</div>
                    </div>

                    <div class="stat">
                        <div class="stat-title font-bold text-xl font-josefin text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Annual Revenue</div>
                        <div class="stat-value">57k+</div>
                    </div>

                    <div class="stat">
                        <div class="stat-title font-bold text-xl font-josefin text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">New Reviews</div>
                        <div class="stat-value">20+</div>
                    </div>

                </div>
                <div className='text-center py-8'>
                    <h2 className="btn btn-ghost normal-case text-4xl font-josefin text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Reviews</h2>
                </div>
            </div>
        </div>
    );
};

export default Home;