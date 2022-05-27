import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const { id } = useParams();
    const [payment, setPayment] = useState({});

    useEffect(() => {
        const url = (`http://localhost:5000/dashboard/payment/:${id}`)

        fetch(url)
            .then(res => res.json())
            .then(data => setPayment(data));
    }, [])

    return (
        <div>
            <h2>Your Payment id is{id}</h2>
            <h2>Your Payment id is{payment.name}</h2>
        </div>
    );
};

export default Payment;