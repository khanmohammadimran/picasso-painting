import axios from 'axios';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const AddProduct = () => {
    const [imageURL, setImageURL] = useState("")
    const [imgLoading, setimgLoading] = useState(false);
    console.log(imageURL)
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const price = e.target.price.value
        const quantity = parseInt(e.target.quantity.value)
        const moq = e.target.moq.value
        // const image = e.target.image.value
        const description = e.target.description.value
        toast.success('You have successfully added a product', {
            position: toast.POSITION.BOTTOM_RIGHT
        })

        const data = {
            name: name,
            price: price,
            availableQuantity: quantity,
            minimumOrderQuantity: moq,
            img: imageURL,
            description: description

        }
        console.log(data)

        fetch('https://mighty-everglades-23547.herokuapp.com/tools', {
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

    const handleUploadImage = (event) => {
        setimgLoading(true);
        const image = event.target.files[0]
        const formData = new FormData();
        formData.set("image", image)

        axios.post('https://api.imgbb.com/1/upload?key=eff07e44130af2c97b3d373a81979e4b', formData)
            .then((res) => {
                setImageURL(res.data.data.display_url)
                setimgLoading(false)
            }).catch((error) => {
                console.log(error)
            });
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
                        <div className='pb-2 font-raleway'>
                            <input type="file" onChange={handleUploadImage} name="img-hosting" placeholder='Tool Name' className="input input-bordered w-full p-3 " />
                        </div>
                        <div>
                            <textarea name='description' className=" w-full textarea textarea-bordered" placeholder="Description"></textarea>
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