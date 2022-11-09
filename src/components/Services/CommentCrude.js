import React from 'react';

const CommentCrude = (props) => {
  const {name,review,photo,_id} = props.props;
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
              <button type="button" className="inline-flex justify-center items-center space-x-2 rounded border font-semibold focus:outline-none px-3 py-2 leading-6 border-emerald-200 bg-emerald-200 text-emerald-700 hover:text-emerald-700 hover:bg-emerald-300 hover:border-emerald-300 focus:ring focus:ring-emerald-500 focus:ring-opacity-50 active:bg-emerald-200 active:border-emerald-200">
                Edit
              </button>
            
          </div>
          <hr/>
        </div>

    );
};

export default CommentCrude;