import React from 'react';
import { useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CommentCrude = (props) => {
  const {name,review,photo,_id,email} = props.props;
  const navigate = useNavigate();

  const handleStatusUpdate = event => {
    event.preventDefault();
    const form = event.target;
    const review = form.review.value;
    fetch(`https://b6a11-service-review-server-side-faisalcode01-faisalcode01.vercel.app/review_update/${_id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({ review: review })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            toast('Updated successfully');
            navigate(`/review/${email}`);
            
        })
}
    return (
        <div className="flex flex-col rounded shadow-sm bg-white overflow-hidden">
          <div className="p-5 lg:p-6 grow w-full flex space-x-4">
            <img src={photo} alt="User Avatar" className="flex-none inline-block w-10 h-10 sm:w-16 sm:h-16 rounded-full" />
            <div className="grow">
              <p className="text-sm sm:text-base leading-relaxed mb-1">
                <a href="/" className="font-semibold text-indigo-600 hover:text-indigo-400">{name} </a>
               {review}
              </p>
            </div>
          </div>
          <div className="p-5 lg:p-6 grow w-full flex space-x-4">
            
              <button onClick={()=>props.deleteReview(_id)} type="button" className="inline-flex justify-center items-center space-x-2 rounded border font-semibold focus:outline-none px-3 py-2 leading-6 border-red-200 bg-red-200 text-red-700 hover:text-red-700 hover:bg-red-300 hover:border-red-300 focus:ring focus:ring-red-500 focus:ring-opacity-50 active:bg-red-200 active:border-red-200">
                Delete
              </button>

              <Popup trigger={<button type="button" className="inline-flex justify-center items-center space-x-2 rounded border font-semibold focus:outline-none px-3 py-2 leading-6 border-emerald-200 bg-emerald-200 text-emerald-700 hover:text-emerald-700 hover:bg-emerald-300 hover:border-emerald-300 focus:ring focus:ring-emerald-500 focus:ring-opacity-50 active:bg-emerald-200 active:border-emerald-200">
                Edit
              </button>} modal>

<div className='card'>
  

<form onSubmit={handleStatusUpdate} className="space-y-6">
  
  <div className="space-y-1">
    <label className="font-medium" for="tk-form-elements-textarea">Edit Here</label>
    <textarea name='review' className="w-full block border border-gray-200 rounded px-3 py-2 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" id="tk-form-elements-textarea" rows="4" placeholder="Enter further details"></textarea>
  </div>

  <button type="submit" className="inline-flex justify-center items-center space-x-2 rounded border font-semibold focus:outline-none px-3 py-2 leading-6 border-emerald-200 bg-emerald-200 text-emerald-700 hover:text-emerald-700 hover:bg-emerald-300 hover:border-emerald-300 focus:ring focus:ring-emerald-500 focus:ring-opacity-50 active:bg-emerald-200 active:border-emerald-200">
                Update
  </button>
  
</form>
</div>






              </Popup>
            
          </div>
          <ToastContainer />

          <hr/>
        </div>

    );
};

export default CommentCrude;