import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const AddProduct = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const price = e.target.price.value
        const quantity = parseInt(e.target.quantity.value)
        const moq = e.target.moq.value
        const image = e.target.image.value
        const description = e.target.description.value
        toast.success('You have successfully added a product', {
            position: toast.POSITION.BOTTOM_RIGHT
        })
        // const productName = e.target.product.value
        // const quantity = parseInt(e.target.quantity.value)

        const data = {
            name: name,
            price: price,
            availableQuantity: quantity,
            minimumOrderQuantity: moq,
            img: image,
            description: description

        }
        console.log(data)

        fetch('http://localhost:5000/tools', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)

            })
    }

    return (
        <div>
            <div className="card w-full max-w-sm shadow-2xl  p-3 mx-auto">
                <form onSubmit={handleSubmit}>
                    <div>
                        <div className='pb-3'>
                            <input type="text" name="name" placeholder='Tool Name' className="input input-bordered w-full " />
                        </div>
                        <div className='pb-3'>
                            <input type="text" placeholder="Available Quantity" name='quantity' className="input input-bordered w-full" />
                        </div>
                        <div className='pb-3'>
                            <input type="number" name='price' placeholder='Price' className="input input-bordered w-full " />
                        </div>

                        <div className='pb-3'>
                            <input type="text" name='moq' placeholder='Minimum Quantity' className="input input-bordered w-full" />
                        </div>
                        <div className='pb-3'>
                            <label for="MOQ" className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300">Image</label>
                            <input type="text" defaultValue={"https://i.ibb.co/zXsmh2X/Strips.png"} name='image' className="input input-bordered w-full" />
                        </div>
                        <div>
                            <textarea name='description' class=" w-full textarea textarea-bordered" placeholder="Description"></textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-ghost border-0 font-sans text-white w-full bg-gradient-to-r from-purple-400 to-pink-600">Submit</button>
                </form>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default AddProduct;