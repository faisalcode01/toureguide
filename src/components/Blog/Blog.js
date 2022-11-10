import React from 'react';

const Blog = () => {
    document.title = "Blog";
    return (
     
         <div>
            <div class="bg-gray-100">
            <div class="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div class="p-5 bg-white border-2 border-white shadow-sm hover:border-indigo-400 transition rounded-lg">
                    <h4 class="text-lg font-bold mb-2">
                    1. difference between sql and nosql
                    </h4>
                    <p class="leading-relaxed text-gray-600">
                    SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.                    </p>
                </div>
                <div class="p-5 bg-white border-2 border-white shadow-sm hover:border-indigo-400 transition rounded-lg">
                    <h4 class="text-lg font-bold mb-2">
                    2. What is JWT, and how does it work?
                    </h4>
                    <p class="leading-relaxed text-gray-600">
                    JSON Web Token JWT is an open standard RFC 7519 for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider IdP</p>
                </div>
                <div class="p-5 bg-white border-2 border-white shadow-sm hover:border-indigo-400 transition rounded-lg sm:col-span-2 lg:col-span-1">
                    <h4 class="text-lg font-bold mb-2">
                    3. What is the difference between javascript and NodeJS?
                    </h4>
                    <p class="leading-relaxed text-gray-600">
                    JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.                    </p>
                </div>

                <div class="p-5 bg-white border-2 border-white shadow-sm hover:border-indigo-400 transition rounded-lg sm:col-span-2 lg:col-span-1">
                    <h4 class="text-lg font-bold mb-2">
                    3. How does NodeJS handle multiple requests at the same time?
                    </h4>
                    <p class="leading-relaxed text-gray-600">
                    NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Blog;