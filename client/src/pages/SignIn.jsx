import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Re-added useNavigate
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const [success, setSuccess] = useState(false); // Added missing success state
  const { loading, error } = useSelector((state) => state.user); 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart()); 
      
      const res = await fetch('/server/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      
      if (data.success === false) {
        dispatch(signInFailure(data.message)); 
        return;
      }
      
      dispatch(signInSuccess(data)); 
      setSuccess(true); // Now this works!

      // Redirect to profile or home after a short delay so they see the success message
      setTimeout(() => {
        navigate('/profile');
      }, 2000);

    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-gray-50 px-4">
      <div className='w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray-100'>
        
        <div className="text-center mb-8">
          <h1 className='text-3xl font-black text-blue-950 uppercase tracking-tighter'>Welcome Back</h1>
          <p className="text-gray-400 text-sm mt-2 font-medium">Log in to manage your premium properties</p>
          <div className="h-1 w-12 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Success Message Display */}
        {success && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl text-center font-bold animate-bounce">
            ✅ Signed in successfully!
          </div>
        )}

        {/* Error Message Display */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-center font-bold">
            ❌ {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
          <div className="group">
            <label className="text-[10px] font-black text-blue-950 uppercase tracking-[0.2em] ml-1 mb-1 block">Email Address</label>
            <input 
              type="email"
              placeholder='name@company.com'
              className='w-full border border-gray-200 p-4 rounded-xl outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all bg-gray-50 text-slate-700'
              id='email' 
              onChange={handleChange}
              required
            />
          </div>

          <div className="group">
            <label className="text-[10px] font-black text-blue-950 uppercase tracking-[0.2em] ml-1 mb-1 block">Password</label>
            <input 
              type="password" 
              placeholder='••••••••' 
              className='w-full border border-gray-100 p-4 rounded-xl outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all bg-gray-50 text-slate-700' 
              id='password' 
              onChange={handleChange}
              required
            />
          </div>

          <button 
            disabled={loading}
            className='bg-blue-950 text-white p-4 rounded-xl font-black uppercase tracking-widest hover:bg-blue-900 hover:shadow-lg transition-all active:scale-[0.98] mt-2 shadow-md disabled:opacity-50'
          >
            {loading ? 'Processing...' : success ? 'Accepted' : 'Sign In'}
          </button>
        </form>

        <div className='flex items-center justify-center gap-2 mt-8 text-sm font-semibold pt-6 border-t border-gray-50'>
          <p className='text-gray-500'>Don't have an account?</p>
          <Link to='/sign-up' className='text-blue-950 hover:text-yellow-600 transition-colors underline underline-offset-4'>
            Create One
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;