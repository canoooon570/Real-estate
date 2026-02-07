import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:8000/server/auth/signup', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      
      if (data.success === false) {
        console.error("Backend Error:", data.message);
        return;
      }
      
      console.log("Success:", data);
      // Optional: navigate('/sign-in')
    } catch (error) {
      console.error("Connection Error:", error.message);
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-gray-50 px-4">
      <div className='w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray-100'>
        
        {/* Branding/Header */}
        <div className="text-center mb-8">
          <h1 className='text-3xl font-black text-blue-950 uppercase tracking-tighter'>Join Us</h1>
          <p className="text-gray-400 text-sm mt-2 font-medium">Create an account to start listing properties</p>
          <div className="h-1 w-12 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
          <div className="group">
            <input
              type="text"
              placeholder='Username'
              className='w-full border border-gray-200 p-4 rounded-xl outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all bg-gray-50 text-slate-700'
              id='username'
              onChange={handleChange}
              required
            />
          </div>

          <div className="group">
            <input 
              type="email"
              placeholder='Email Address'
              className='w-full border border-gray-200 p-4 rounded-xl outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all bg-gray-50 text-slate-700'
              id='email' 
              onChange={handleChange}
              required
            />
          </div>

          <div className="group">
            <input 
              type="password" 
              placeholder='Password' 
              className='w-full border border-gray-200 p-4 rounded-xl outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all bg-gray-50 text-slate-700' 
              id='password' 
              onChange={handleChange}
              required
            />
          </div>

          <button className='bg-blue-950 text-white p-4 rounded-xl font-black uppercase tracking-widest hover:bg-blue-900 hover:shadow-lg transition-all active:scale-[0.98] mt-2'>
            Sign Up
          </button>
        </form>

        {/* Footer Link */}
        <div className='flex items-center justify-center gap-2 mt-8 text-sm font-semibold pt-6 border-t border-gray-50'>
          <p className='text-gray-500'>Already have an account?</p>
          <Link to='/sign-in' className='text-blue-950 hover:text-yellow-600 transition-colors'>
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;