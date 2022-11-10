import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import CommentCrude from './CommentCrude';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserComments = () => {
    const comments = useLoaderData();
    const navigate = useNavigate();
    document.title = "MyReviews";
    function deleteReview(params) {
        fetch('https://b6a11-service-review-server-side-faisalcode01-faisalcode01.vercel.app/review_delete/'+params,{
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json'
            },
        })
        .then(res =>res.json())
        .then(data => {
            toast('deleted successfully');
            navigate(`/review/${params}`);
        });
    }
    return (
        <div className="bg-gray-100">
        <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
          <div className="max-w-3xl mx-auto space-y-4 lg:space-y-8">
         
            <div className="flex flex-col rounded shadow-sm bg-white overflow-hidden">
        {
          comments.map(comment => <CommentCrude deleteReview={deleteReview}  key={comment._id} props={comment}></CommentCrude>)
        }
         <div>
         <ToastContainer />
  </div>
        </div>
        </div>
        </div>
        </div>
    );
};

export default UserComments;