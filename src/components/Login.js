import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';


import {FaGoogle, FaGithub} from 'react-icons/fa'
import { useNavigate, Navigate, Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';


const Login = () => {

  const {user,providerLogin,providerLoginUser} = useContext(AuthContext);
  const [ferror, setError] = useState(null);
  const location = useLocation();
  const from = location.state?.pathname || '/';
  const googleProvider = new GoogleAuthProvider(); 

  const githubLogin = new GithubAuthProvider();
  const navigate = useNavigate();

 
const handleLoginSubmit = event =>{
  event.preventDefault();
  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;
  providerLoginUser(email,password)
  .then((result) => {
    
    navigate(from,{replace:true});

  }).catch((error) => {
    console.error(error.message);
    setError(error.message);

  })
}



    const handleGithubLogin = () =>{
        providerLogin(githubLogin)
        .then(result =>{
            const user  = result.user;
           
            navigate(from,{replace:true});
        
            console.log(user);
            })
        .catch(error =>  console.log(error.message));
    }

    const handleGooleLogin = () =>{
        providerLogin(googleProvider)
        .then(result =>{
            const user  = result.user;
           
            navigate(from,{replace:true});
            console.log(user);
            })
        .catch(error =>  console.log(error));
    }

    if(user){
      return <Navigate to="/"></Navigate>
     }
    return (


<div id="page-container" className="flex flex-col mx-auto w-full min-h-screen bg-gray-100">
  <main id="page-content" className="flex flex-auto flex-col max-w-full">
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden max-w-10xl mx-auto p-4 lg:p-8 w-full">
      <div className="pattern-dots-md text-gray-300 absolute top-0 right-0 w-32 h-32 lg:w-48 lg:h-48 transform translate-x-16 translate-y-16"></div>
      <div className="pattern-dots-md text-gray-300 absolute bottom-0 left-0 w-32 h-32 lg:w-48 lg:h-48 transform -translate-x-16 -translate-y-16"></div>

      <div className="py-6 lg:py-0 w-full md:w-8/12 lg:w-6/12 xl:w-4/12 relative">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold inline-flex items-center mb-1 space-x-3">
          <img className="text-indigo-300 opacity-75 hi-outline hi-cube-transparent inline-block w-6 h-6" src="https://cdn-icons-png.flaticon.com/512/5691/5691039.png" alt=""/>
            <span>YourTourGuide</span>
          </h1>
          <p className="text-gray-500">
            Welcome, please sign in to your dashboard
          </p>
        </div>
  
        <div className="flex flex-col rounded shadow-sm bg-white overflow-hidden">
          <div className="p-5 lg:p-6 grow w-full">
            <div className="sm:p-5 lg:px-10 lg:py-8">
              <form onSubmit={handleLoginSubmit} className="space-y-6">
                <div className="space-y-1">
                  <label for="tk-pages-sign-in-email" className="font-medium">Email</label>
                  <input className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" type="email" name="email" id="tk-pages-sign-in-email" placeholder="Enter your email" />
                </div>
                <div className="space-y-1">
                  <label for="tk-pages-sign-in-password" className="font-medium">Password</label>
                  <input className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" type="password" name="password" id="tk-pages-sign-in-password" placeholder="Enter your password" />
                </div>
                <div>
                  <button type="submit" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none w-full px-4 py-3 leading-6 rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700">
                    Sign In
                  </button>
                  <div className="space-y-2 sm:flex sm:items-center sm:justify-between sm:space-x-2 sm:space-y-0 mt-4">
                    <label className="flex items-center">
                      <input type="checkbox" className="border border-gray-200 rounded h-4 w-4 text-indigo-500 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
                      <span className="ml-2">
                        Remember me
                      </span>
                    </label>
                    <a href="/" className="inline-block text-indigo-600 hover:text-indigo-400">Forgot Password?</a>
                  </div>
                </div>
              </form>   

                      <div class="inline-flex justify-around   font-semibold focus:outline-none w-full px-2 py-2  rounded  text-white ">
      <button onClick={handleGooleLogin} type="button" class="inline-flex justify-center items-center space-x-3 border font-semibold focus:outline-none px-2 py-1 leading-5 text-sm rounded active:z-1 focus:z-1 -mr-px border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700">
      <FaGoogle></FaGoogle> Login with Google
      </button>
      <button onClick={handleGithubLogin} type="button" class="inline-flex justify-center items-center space-x-3 border font-semibold focus:outline-none px-2 py-1 leading-5 text-sm rounded active:z-1 focus:z-1 border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700">
      <FaGithub></FaGithub> Login with Github
      </button>
    </div>       
            </div>
          </div>        
          <div className="py-4 px-5 lg:px-6 w-full text-sm text-center bg-gray-50">
            Don’t have an account yet?
            <Link className="font-medium text-indigo-600 hover:text-indigo-400" to="/register">Join us today</Link>
          </div>
        </div>


      </div>
    </div>
  </main>
</div>
   
      
    );
};

export default Login;