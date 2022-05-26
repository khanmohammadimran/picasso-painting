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
        const purchase = {
            name: tools.name,
            customer: user.email,
            customerName: user.displayName,
            toolsQuantity: event.target.number.value,
            toolsPrice: event.target.price.value

        }
        number = parseInt(number)
        console.log(number, user.email)
        minimumOrderQuantity = parseInt(minimumOrderQuantity);
        availableQuantity = parseInt(availableQuantity);
        if (minimumOrderQuantity > number) {
            return toast.error('Please order atleast Minimum Quantity', {
                position: toast.POSITION.BOTTOM_RIGHT
            })
        }
        else if (availableQuantity < number) {
            return toast.error('You cannot order more than available quantity', {
                position: toast.POSITION.BOTTOM_RIGHT
            })
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

        fetch('http://localhost:5000/mypurchase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchase)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Please checkout the product on My Item page', {
                    position: toast.POSITION.BOTTOM_RIGHT
                })
                console.log(data)

            })


    }


    return (
        <div className='bg-white font-raleway'>
            <div className="hero w-1/2 mx-auto shadow-xl bg-white my-8 rounded-lg">
                <div className="hero-content flex-col lg:flex-row">
                    <img className='w-1/2' src={tools.img} alt="" />
                    <div>
                        <h2 className='text-xl pb-2'><strong>See The Detail about the Tool</strong></h2>
                        <h2 className='text-xl pb-2'><strong>Tool Name:</strong> {tools.name}</h2>
                        <p><strong>Description</strong>{tools.description}</p>
                    </div>
                </div>
            </div>
            <div className='bg-white w-1/2 mx-auto shadow-lg rounded-lg p-8'>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input value={user.displayName} readOnly disabled className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input value={user.email} readOnly className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Minimum Quantity</span>
                        </label>
                        <input value={tools?.minimumOrderQuantity} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input value={tools?.availableQuantity} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Single Quantity Price</span>
                        </label>
                        <input name='price' value={tools?.price} className="input input-bordered" />
                    </div>
                    <div className="form-control pb-3">
                        <label className="label">
                            <span className="label-text">Add Tools Quantity</span>
                        </label>
                        <input type="number" name="number" placeholder='Enter Quantity' className=' input input-bordered' />
                    </div>
                    <input className='btn btn-ghost border-0 font-sans text-white w-full bg-gradient-to-r from-purple-400 to-pink-600' type="submit" value="Purchase" />
                </form>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Purchase;