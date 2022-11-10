import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import { PhotoProvider } from 'react-photo-view';

const Services = () => {
  document.title = "All Services";
const [services,setServices] = useState([]);
  useEffect(
    () =>{
    fetch('https://b6a11-service-review-server-side-faisalcode01-faisalcode01.vercel.app/home_services')
    .then(res =>res.json())
    .then(data =>setServices(data))
  }
    ,[]);
    return (
<div className="bg-white">
  <div className="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
    <div className="text-center">

      <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
      SPOTLIGHT DESTINATIONS
      </h2>
      <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto">
      Looking for your next great adventure? We can help. Here is a sampling of our most popular destinations. Experience private tours with authentic local flavour.
      </h3>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
    <PhotoProvider>
    {
      services.map(service => <ServiceCard key={service._id} props={service}></ServiceCard>)
    }
  </PhotoProvider>

    </div>
    <div className="text-center">
      
      <Link to="/services" type="button" class="inline-flex justify-center items-center space-x-2 rounded border font-semibold focus:outline-none px-6 py-4 leading-6 border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700">
        <span>All Servises</span>
        <svg class="hi-solid hi-arrow-right inline-block w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
      </Link>
    </div>
  </div>
</div>
    );
};

export default Services;