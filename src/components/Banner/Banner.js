import React from 'react';

const Banner = () => {
    return (
        <div className="bg-cover bg-bottom" style={{backgroundImage: "url("+"https://source.unsplash.com/Nyvq2juw4_o/1280x400"+")"}}>
          <div className="bg-white bg-opacity-90">
            <div className="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
              <div className="text-center">

                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                453 Tour in Bangladesh
                </h2>
                <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto">
                offering you a unique and personalized experience in any destination.
                </h3>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Banner;