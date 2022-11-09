import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CommentCrude from './CommentCrude';

const UserComments = () => {
    const comments = useLoaderData();
    function deleteReview(params) {
        fetch('http://localhost:5000/review_delete/'+params,{
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json'
            },
        })
        .then(res =>res.json())
        .then(data => {
          alert('deleted successfully');
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

  </div>
        </div>
        </div>
        </div>
        </div>
    );
};

export default UserComments;