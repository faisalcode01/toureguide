import React, { useEffect, useState } from 'react';
import ServiceCard from '../Services/ServiceCard';
import { PhotoProvider } from 'react-photo-view';

const AllServices = () => {
  document.title = "All Services";
    const [services,setServices] = useState([]);
    useEffect(
      () =>{
      fetch('https://b6a11-service-review-server-side-faisalcode01-faisalcode01.vercel.app/services')
      .then(res =>res.json())
      .then(data =>setServices(data))
    }
      ,[]);
      return (
  <div className="bg-white">
    <div className="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
    <div className="text-center">

      <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
      ALL DESTINATIONS
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
    </div>
  </div>
      );
};

export default AllServices;