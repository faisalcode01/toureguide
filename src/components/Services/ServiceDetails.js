import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const serviceDetails = useLoaderData();
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
              <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="opacity-50 hi-solid hi-heart inline-block w-5 h-5"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg>
              <span>Favorite</span>
            </button>
            <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none sm:grow px-3 py-2 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none">
              <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="opacity-50 hi-solid hi-shopping-bag inline-block w-5 h-5"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServiceDetails;