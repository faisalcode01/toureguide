import React from 'react';

const Comment = (props) => {
  const {name,review,photo} = props.props;
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
        </div>
    );
};

export default Comment;