import photo from '../../assets/pic1.jpg';
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';


const RegisterPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
  <div className='app   min-h-screen bg-gray-200'>
    <Navbar/>
   <div className="container mx-auto py-10" >
    <div className="w-10/12 lg:w-10/12 border-solid border-2 border-gray-600  bg-white rounded-xl mx-auto shadow-lg overflow-hidden flex flex-col lg:flex-row"> 
    <div
          className={`w-full lg:w-1/2 flex flex-col items-center justify-center p-15 bg-no-repeat bg-cover bg-center ${
            window.innerWidth <= 768 ? 'hidden' : '' // Hide on mobile devices (width <= 768px)
          }`}
          style={{ backgroundImage: `url(${photo})` }}
        >
         <h1 className='text-white text-3xl mb-3'>Welcome</h1>
          <div>
            <p className='text-white'> Ullam necessitatibus cumque voluptatem odio! Praesentium, ducimus est nihil, nostrum quo unde cum illum adipisci nemo recusandae quibusdam optio odit cupiditate ea?</p>
          </div>
      </div>
      <div className='w-full lg:w-1/2 py-16 px-12'>
        <h2 className='text-3xl mb-4'>Register</h2>
        <p className='mb-4'>Create your account!</p>

        <form >
          <div className='grid grid-cols-2 gap-5'>
            <input type="text" placeholder='First Name' className='border border-gray-400 py-1 px-2 rounded-lg'/>
            <input type="text" placeholder='Second Name' className='border border-gray-400 py-1 px-2 rounded-lg'/>
          </div>
          <div className='mt-5'>
          <input type="text" placeholder='Email' className='border border-gray-400 py-1 px-2 rounded-lg w-full' />

          </div>
          <div className='mt-5'>
          <input type="password" placeholder='Password' className='border border-gray-400 py-1 px-2 rounded-lg w-full' />

          </div>
          <div className='mt-5'>
          <input type="password" placeholder='Confirm Your Password' className='border border-gray-400 py-1 px-2 rounded-lg w-full' />

          </div>
          <div className='mt-5'>
            <input type="checkbox" className='border border-gray-400' />
            <span>
              I accept the <a href="#" className='text-blue-300 font-semibold'> Terms of Use </a>&<a href="#"  className='text-blue-300 font-semibold'> Privacy Policy</a>
            </span>
            <div className='mt-5'>
                <button className='w-full bg-blue-300 py-3 text-center text-white  hover:bg-blue-600 active:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 rounded-lg '>Register</button>
            </div>
          </div>
          <a className=' flex justify-center mt-5 underline underline-offset-1'>Already have an account? <a className='text-sky-500'> Login </a> </a>
        </form>
      </div>
    </div>
   </div>
  </div>
  );
}

export default RegisterPage;
