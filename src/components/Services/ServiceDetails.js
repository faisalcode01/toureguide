import React, { useContext, useEffect, useState } from 'react';
import {  useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import Comment from './Comment';

const ServiceDetails = () => {
  document.title = "Service details";
    const serviceDetails = useLoaderData();
    const [comment,setComment] = useState([]);
    const {user} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const url= "https://b6a11-service-review-server-side-faisalcode01-faisalcode01.vercel.app/review/" + serviceDetails._id;


    useEffect(
      () =>{
      fetch(url)
      .then(res =>res.json())
      .then(data =>setComment(data))
    }
      ,[url]);

    const handleSubmit = event =>{
        event.preventDefault();
        if (!user) {
          navigate('/login',{state:location})
          // return <Navigate to="/login" state={{from:location}} replace></Navigate> 
      }
        const form = event.target;
        const review = form.review.value;
        const data = {
          'review': review,
          'service_id':serviceDetails._id,
          'email':user.email,
          'name':user.displayName,
          'photo':user.photoURL,
        };


        fetch('https://b6a11-service-review-server-side-faisalcode01-faisalcode01.vercel.app/review',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res =>res.jason())
        .then(data => {
          
        });

        const newComments = [data,...comment];
        setComment(newComments);

        form.reset();
        
      }
    return (
        <div>
<div className="bg-white">
    
  <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
      <div>
        <img src={serviceDetails.image_url} alt="Product Image" />
      </div>

      <div>
        <div className="grid ">
          <div>
            <a href="/" className="block font-semibold md:text-lg text-gray-600 hover:text-gray-500">
              {serviceDetails.title}
            </a>
            <hr/>
          </div>
        </div>
        <div className="prose prose-indigo ">
            {serviceDetails.details}
        </div>
        <div className="space-y-4">

          <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
            <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none sm:flex-none px-3 py-2 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none">
              <span>Price</span>
            </button>
            <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none sm:grow px-3 py-2 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none">
              <span>{serviceDetails.price}</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  </div>
</div>






<div className="bg-gray-100">
  <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
    <div className="max-w-3xl mx-auto space-y-4 lg:space-y-8">
   
      <div className="flex flex-col rounded shadow-sm bg-white overflow-hidden">
        <div className="p-5 lg:p-6 grow w-full flex space-x-4">
          <img src={user?.photoURL} alt="User Avatar" className="flex-none inline-block w-10 h-10 sm:w-16 sm:h-16 rounded-full" />
          <div className="grow">
            <div className="text-sm sm:text-base leading-relaxed mb-1">
              <a href="/" className="font-semibold text-indigo-600 hover:text-indigo-400">{user?.displayName}</a>
            </div>
           
            <form onSubmit={handleSubmit} className="space-y-6">
              <textarea name="review" className="block border border-gray-200 rounded placeholder-gray-400 px-3 py-2 w-full focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" id="tk-comment" rows="4" placeholder="Join the conversation.."></textarea>
              <button type="submit" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700">
                <span>Post Comment</span>
              </button>
            </form>


            


            {/* <form onSubmit={handleSubmit}>
                <textarea name='review' className="block border border-gray-200 rounded placeholder-gray-400 px-3 py-2 w-full focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" id="tk-comment" rows="4" placeholder="Join the conversation.."></textarea>
                <button type="submit">submit</button>
            </form> */}
          </div>
        </div>
      </div>
   
      
        {
          comment.map(comment1 => <Comment key={comment1._id} props={comment1}></Comment>)
        }

  

    </div>
  </div>
</div>














        </div>
    );
};

export default ServiceDetails;