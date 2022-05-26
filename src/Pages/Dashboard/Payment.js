import React from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const { id } = useParams();


    return (
        <div>
            <h2>Your Payment id is{id}</h2>
        </div>
    );
};

export default Payment;