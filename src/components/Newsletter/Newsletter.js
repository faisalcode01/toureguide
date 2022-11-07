import React from 'react';

const Newsletter = () => {
    return (
        <div className="bg-gray-100 overflow-hidden">
  <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
    <div className="lg:w-2/3 xl:w-1/2 mx-auto relative">
      <div className="absolute pattern-dots-xl text-gray-200 top-0 left-0 w-32 h-48 md:h-96 transform -translate-y-12 -translate-x-16 -rotate-3"></div>
      <div className="absolute pattern-dots-xl text-gray-200 bottom-0 right-0 w-32 h-48 md:h-96 transform translate-y-12 translate-x-16 rotate-3"></div>
      <div className="absolute rounded-full top-0 right-0 w-32 h-32 bg-yellow-200 bg-opacity-50 -mt-12 -mr-12"></div>
      <div className="absolute rounded-xl bottom-0 left-0 w-32 h-32 bg-blue-200 bg-opacity-50 -mb-10 -ml-10 transform rotate-3"></div>
      <div className="p-2 rounded text-center relative bg-indigo-500 bg-opacity-10">
        <div className="p-8 lg:py-12 lg:px-16 bg-white rounded">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-2">
            Subscribe to our newsletter
          </h3>
          <p className="prose prose-indigo mb-6">
            Join us and receive the best curated news, freebies and resources directly to your inbox every week!
          </p>
          <form onsubmit="return false;" className="space-y-3">
            <div className="flex items-center">
              <input className="block border placeholder-gray-400 z-1 px-5 py-3 leading-6 w-full rounded-l active:z-1 focus:z-1 -mr-px border-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" type="text" placeholder="Your email" />
              <button type="submit" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none flex-none px-4 py-3 leading-6 rounded-r active:z-1 focus:z-1 border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700">
                <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="sm:hidden hi-outline hi-plus inline-block w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                <span className="hidden sm:inline">Subscribe</span>
              </button>
            </div>
            <p className="text-sm text-gray-600 leading-6">
              No spam ever, unsubscribe at any time. <br />
              Check out our <a href="/" className="font-medium text-indigo-600 hover:text-indigo-400">Privacy Policy</a>.
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Newsletter;