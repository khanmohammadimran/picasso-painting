import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [tools] = useState({});
    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/mypurchase?customer=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    } return res.json()
                })
                .then(data => setOrders(data))
        }
    }, [user])


    return (
        <div className='bg-white'>
            <h2 className='text-slate-600 font-raleway py-4 font-bold'>Your Total Order:{orders.length}</h2>
            <div className=" overflow-x-auto">
                <table className=" table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Tools Quantity</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody className='font-raleway'>
                        {
                            orders.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{order.name}</td>
                                <td>{order.toolsQuantity}</td>
                                <td>{order.toolsPrice}</td>
                                <td><Link to={`/dashboard/payment/${order._id}`}>Pay</Link></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div >
        </div >
    );
};

export default MyOrders;