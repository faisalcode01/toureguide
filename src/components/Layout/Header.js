import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Header = () => {

  const {user,providerLogout} = useContext(AuthContext);
  const handleLogout = () =>{
    providerLogout()
    .then((result) => {
      console.log(result)
    })
    .catch((error) => {
      console.log(error)
    })
  }
    return (
        <header id="page-header" className="flex flex-none items-center py-10 bg-gray-800">
    <div className="flex flex-col text-center sm:flex-row sm:items-center sm:justify-between space-y-6 sm:space-y-0 container xl:max-w-7xl mx-auto px-4 lg:px-10">
      <div>
        <a href="/" className="inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-white hover:opacity-75">
          <img className="text-indigo-300 opacity-75 hi-outline hi-cube-transparent inline-block w-6 h-6" src="https://cdn-icons-png.flaticon.com/512/5691/5691039.png" alt=""/>
          {/* <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="text-indigo-300 opacity-75 hi-outline hi-cube-transparent inline-block w-6 h-6"><path strokeLinejoin="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path></svg> */}
          <span>YourTourGuide</span>
        </a>
      </div>
      <nav className="space-x-4 sm:space-x-6">
      <Link className='font-semibold text-gray-300 hover:text-gray-400' to="/blog">Blog</Link>

        {/* <a href="/" className="font-semibold text-gray-300 hover:text-gray-400">
          <span>Features</span>
        </a> */}
        {
                user?.uid?
                <>
                <a data-toggle="tooltip" className='font-semibold text-gray-300 hover:text-gray-400' data-placement="top" title={user?.displayName}>
                
                {/* <img mx-auto roundedCircle style={{height:'30px'}}  src={user?.photoURL} alt="profile photo"/> */}
                {user?.displayName}
              </a>
              <Link className='font-semibold text-gray-300 hover:text-gray-400' to={`/review/${user.email}`}>My Reviews</Link>
              <Link className='font-semibold text-gray-300 hover:text-gray-400' to="/add_service">Add Service</Link>


                <a  onClick={handleLogout} className='font-semibold text-gray-300 hover:text-gray-400'>LogOut</a>
                </>                
                :

                <>
                  <Link className='font-semibold text-gray-300 hover:text-gray-400' to="/login">Login</Link>
                  <Link className='font-semibold text-gray-300 hover:text-gray-400' to="/register">Register</Link>
                </>

              

                
              }

      </nav>
    </div>
  </header>
        
    );
};

export default Header;