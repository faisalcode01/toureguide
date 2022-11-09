import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

import {FaGoogle, FaGithub} from 'react-icons/fa'
import { useNavigate, Navigate, Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

// import { AuthContext } from '../../Contexts/AuthProvider';

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
    //   <div classNameName='d-flex justify-content-center mt-5  p-5 rounded'>
        
    //   <div style={{ width: '30rem' }}>
        
    //     <div>
    //       <div>Login Form</div>
    //       <div>
    //         <form onSubmit={handleLoginSubmit}>
    //           <div classNameName="form-group">
    //             <label for="exampleInputEmail1">Email address</label>
    //             <input name="email" type="email" classNameName="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    //             <small id="emailHelp" classNameName="form-text text-muted">We'll never share your email with anyone else.</small>
    //           </div>
    //           <div classNameName="form-group">
    //             <label for="exampleInputPassword1">Password</label>
    //             <input name="password" type="password" classNameName="form-control" id="exampleInputPassword1" placeholder="Password"/>
    //           </div>
    //           <span classNameName='text-danger'>{ferror}</span>
    //           <br/>
    //           <button type="submit" classNameName="btn btn-primary">Submit</button>
    //         </form>
    //         <br/>
    //         <Link to="/register">Already have account</Link>
    //       </div>
    //       <hr/>
    //       <div classNameName='d-flex justify-content-around'>
    //   <button onClick={handleGooleLogin}  variant='outline-primary'><FaGoogle></FaGoogle> Login with Google</button>

    //   <button onClick={handleGithubLogin} variant='outline-dark'><FaGithub></FaGithub> Login with Github</button>

    // </div>
    //     </div>

    //   </div>



    //   </div>


<div id="page-container" className="flex flex-col mx-auto w-full min-h-screen bg-gray-100">
  <main id="page-content" className="flex flex-auto flex-col max-w-full">
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden max-w-10xl mx-auto p-4 lg:p-8 w-full">
      <div className="pattern-dots-md text-gray-300 absolute top-0 right-0 w-32 h-32 lg:w-48 lg:h-48 transform translate-x-16 translate-y-16"></div>
      <div className="pattern-dots-md text-gray-300 absolute bottom-0 left-0 w-32 h-32 lg:w-48 lg:h-48 transform -translate-x-16 -translate-y-16"></div>

      <div className="py-6 lg:py-0 w-full md:w-8/12 lg:w-6/12 xl:w-4/12 relative">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold inline-flex items-center mb-1 space-x-3">
            <svg className="hi-solid hi-cube-transparent inline-block w-8 h-8 text-indigo-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clip-rule="evenodd"/></svg>
            <span>Company</span>
          </h1>
          <p className="text-gray-500">
            Welcome, please sign in to your dashboard
          </p>
        </div>
  
        <div className="flex flex-col rounded shadow-sm bg-white overflow-hidden">
          <div className="p-5 lg:p-6 grow w-full">
            <div className="sm:p-5 lg:px-10 lg:py-8">
              <form onsubmit="return false;" className="space-y-6">
                <div className="space-y-1">
                  <label for="tk-pages-sign-in-email" className="font-medium">Email</label>
                  <input className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" type="email" id="tk-pages-sign-in-email" placeholder="Enter your email" />
                </div>
                <div className="space-y-1">
                  <label for="tk-pages-sign-in-password" className="font-medium">Password</label>
                  <input className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" type="password" id="tk-pages-sign-in-password" placeholder="Enter your password" />
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