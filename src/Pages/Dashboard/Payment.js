import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L46PaFyeVpk0BaQiWFqMsZA8WtDVRNMQuihQ3RaV2BorgaoawaMWPvsMEexzYvs6iD0kFxwMsULoU8ZWAaYOLvw005InoKC0d');

const Payment = () => {
    const { id } = useParams();
    const url = `https://mighty-everglades-23547.herokuapp.com/mypurchase/${id}`


    const { data: payment, isLoading } = useQuery(['mypurchase', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="card w-96 my-8 mx-auto font-raleway bg-gradient-to-r from-purple-400 to-pink-600 text-white">
                <div className="card-body">
                    <h2 className="text-xl text-center">Tool Name: {payment.name}</h2>
                    <p>Your Selected Tools Quantity {payment.toolsQuantity}</p>
                    <p>Total Price: {payment.toolsPrice}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-96 mx-auto max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm payment={payment} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;