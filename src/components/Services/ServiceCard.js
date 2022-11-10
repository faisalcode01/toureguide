import React from 'react';
import { Link } from 'react-router-dom';
import {  PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = (props) => {
    const {image_url,title,details,rating,_id} = props.props;

    return (
        <div>
            <div className="group relative p-4 mb-5">
                <div className="absolute inset-0 rounded-lg bg-indigo-100 transform transition ease-out duration-150 skew-y-2 group-hover:-rotate-2"></div>
                <PhotoView src={image_url}>
                    <img src={image_url}  alt="User Avatar" className="relative rounded-lg shadow" />
                </PhotoView>
            </div>
            <h4 className="text-xl font-semibold mb-1">
               {title}
            </h4>

            <p className="prose prose-indigo">
                {details.slice(0, 100)+"..."}
            </p>
            <div>
            <Link to={`/services/${_id}`} type="button" class="inline-flex justify-center items-center space-x-2 rounded border font-semibold focus:outline-none px-3 py-2 leading-6 border-indigo-200 bg-indigo-200 text-indigo-700 hover:text-indigo-700 hover:bg-indigo-300 hover:border-indigo-300 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-200 active:border-indigo-200">
                Details
            </Link>
  </div>
      </div>
    );
};

export default ServiceCard;