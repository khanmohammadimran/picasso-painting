import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Purchase = () => {
    const { purchaseId } = useParams();
    const [tools, setTools] = useState({});
    const [user] = useAuthState(auth);
    let { minimumOrderQuantity, availableQuantity } = tools;

    useEffect(() => {
        const url = `http://localhost:5000/tools/${purchaseId}`

        fetch(url)
            .then(res => res.json())
            .then(data => setTools(data));
    }, [])


    const handleSubmit = event => {
        event.preventDefault();
        let number = event.target.number.value;
        number = parseInt(number)
        console.log(number)
        minimumOrderQuantity = parseInt(minimumOrderQuantity);
        availableQuantity = parseInt(availableQuantity);
        if (minimumOrderQuantity > number || availableQuantity < number) {
            return toast.error('Please order atleast Minimum Quantity')
        }
        else {
            const url = `http://localhost:5000/tools/${purchaseId}`
            console.log(url)
            fetch(url, {
                method: 'PATCH',
                body: JSON.stringify({
                    minimumOrderQuantity: minimumOrderQuantity
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => {
                    fetch(url)
                        .then(res => res.json())
                        .then(data => setTools(data))
                    event.target.reset();
                });
        }


    }


    return (
        <div className="py-8">
            <div className='bg-white w-1/2 mx-auto rounded-lg drop-shadow-2xl p-2'>
                <h2 className='text-center font-raleway text-3xl py-5'>See The Detail of the Tool</h2>
                <h2 className='text-center font-raleway text-3xl py-5'>{user.displayName}</h2>
                <h2 className='text-center font-raleway text-3xl py-5'>{user.email}</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 items-center bg-white'>
                    <div>
                        <img className='sm:object-cover mx-auto md:w-96 text-center p-3 rounded-lg' src={tools.img} alt="" />
                    </div>
                    <div className='font-sans'>
                        <h2 className='pb-1 text-2xl'>Tool Name: {tools.name}</h2>
                        <hr />
                        <p className='pb-1 text-2xl'>Price: ${tools.price}</p>
                        <hr />
                        <p className='pb-1 text-2xl'>Minimum Order Quantity: {tools.minimumOrderQuantity}</p>
                        <hr />
                        <p className='pb-1 text-2xl'>Available Quantity: {tools.availableQuantity}</p>
                        <hr />
                        <p className='pb-1 text-2xl'>Single tool price: {tools.price}</p>
                        <hr />
                        <p className='pb-1 text-2xl'>Description:</p><span>{tools.description}</span>
                    </div>
                </div>
                <div className='text-center pb-4'>
                    <div className="relative flex py-5 items-center">
                        <div className="flex-grow border-t border-lime-500"></div>
                        <span className="flex-shrink mx-4 font-playfair text-2xl">Increase Quantity</span>
                        <div className="flex-grow border-t border-lime-500"></div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input type="number" name="number" placeholder='Restock item Quantity' className=' border w-1/2 py-4 p-2 rounded-lg mb-2 font-sans' />
                        <br />
                        <input type="submit" value="Purchase" className='bg-lime-500 hover:bg-lime-600 rounded-lg w-1/2 py-2 text-white text-2xl' />
                    </form>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};

export default Purchase;