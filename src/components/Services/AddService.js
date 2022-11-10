import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddService = () => {
    document.title = "Add Service";
    const navigate = useNavigate();
    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const image_url = form.image_url.value;
        const details = form.details.value;
        const price = form.price.value;

        const data = {
            'title':title,
            'image_url':image_url,
            'details':details,
            'price':price,
          };

        fetch('https://b6a11-service-review-server-side-faisalcode01-faisalcode01.vercel.app/service',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res =>res.jason())
        .then(data => {
          
        });

        toast("Added successfully!");

        navigate('/');

        
      }
    return (
<div className="bg-gray-100">
    <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
        <div className="max-w-3xl mx-auto space-y-4 lg:space-y-8">
            <div className="flex flex-col rounded shadow-sm bg-white overflow-hidden">
                <form onSubmit={handleSubmit} class="px-4 py-16">
                    <div className="space-y-3">
                        <label for="tk-form-layouts-labels-on-top-email" className="font-medium space-y-3">Title</label>
                        <input className="block border border-gray-200 rounded px-3 py-2 leading-6 w-full focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" name="title" type="text" id="tk-form-layouts-labels-on-top-email" placeholder="Enter your email.." />
                    </div>
                    <br/>

                    <div className="space-y-3">
                        <label for="tk-form-layouts-labels-on-top-password" className="font-medium space-y-3">Image Url</label>
                        <input className="block border border-gray-200 rounded px-3 py-2 leading-6 w-full focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" name="image_url" type="text" id="tk-form-layouts-labels-on-top-password" placeholder="Enter your password.." />
                    </div>
                    <br/>


                    <div className="space-y-3">
                        <label for="tk-form-layouts-labels-on-top-password" className="font-medium space-y-3">Description</label>
                        <textarea className="block border border-gray-200 rounded px-3 py-2 leading-6 w-full focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" name="details" type="text" id="tk-form-layouts-labels-on-top-password" placeholder="Enter your password.." />
                    </div>
                    <br/>

                    <div className="space-y-3">
                        <label for="tk-form-layouts-labels-on-top-password" className="font-medium space-y-3">Price</label>
                        <input className="block border border-gray-200 rounded px-3 py-2 leading-6 w-full focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" name="price" type="text" id="tk-form-layouts-labels-on-top-password" placeholder="Enter your password.." />
                    </div>
                    <br/>
                    <button type="submit" className=" inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700">
                        Add Service
                    </button>
                </form>
            </div>
        </div>
    </div>
    <ToastContainer />
</div>
    );
};

export default AddService;