import React from 'react';
import notFound from '../images/notFound.png'

const NotFound = () => {
    return (
        <div>
            <div className='bg-white'>
                <div className='w-2/3 mx-auto p-3 text-center'>
                    <h2 className="text-4xl font-finger text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">404</h2>
                    <p className="text-3xl font-finger text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Sorry the page you're looking for dosen't exist.</p>
                    <img src={notFound} alt="" />
                </div>
            </div>
        </div>
    );
};

export default NotFound;