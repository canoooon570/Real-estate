import React, { useState } from 'react';
import { FaUserCircle, FaHome, FaHeart, FaPlus, FaSignOutAlt, FaCog, FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // Get data from Redux
  const { currentUser } = useSelector((state) => state.user);
  
  const [activeTab, setActiveTab] = useState('selling');
  const [showSettings, setShowSettings] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleLogout = async () => {
    try {
      const res = await fetch('/server/auth/logout', {
        method: 'POST',
      });
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }
      dispatch(signInSuccess(null)); 
      navigate('/sign-in');
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/server/user/update/${currentUser._id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      
      if (data.success === false) {
        console.log(data.message);
        return;
      }
      setUpdateSuccess(true);
      setShowSettings(false);
      dispatch(signInSuccess(data)); 
    } catch (error) {
      console.log(error.message);
    }
  };

  // If Redux is empty (user logged out), don't crash, just return a message or redirect
  if (!currentUser) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-bold">Please sign in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-blue-950 text-white pt-12 pb-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-5">
            {/* CHANGED: using currentUser.avatar */}
            {currentUser.avatar ? (
              <img src={currentUser.avatar} alt="Profile" className="w-24 h-24 rounded-full border-4 border-yellow-500 shadow-xl" />
            ) : (
              <div className="bg-gray-200 p-1 rounded-full border-4 border-yellow-500 shadow-xl">
                <FaUserCircle className="text-7xl text-gray-400" />
              </div>
            )}
            <div>
              {/* CHANGED: using currentUser.username */}
              <h1 className="text-3xl font-extrabold tracking-tight">{currentUser.username}</h1>
              <p className="text-blue-200 font-medium">{currentUser.email}</p>
              <div className="flex gap-2 mt-2">
                 <span className="text-[10px] bg-blue-800 text-white px-3 py-1 rounded-full font-bold uppercase tracking-widest">
                  Verified User
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex gap-3">
            <button 
              onClick={() => setShowSettings(!showSettings)}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all font-semibold border border-white/20 text-sm">
              <FaCog /> {showSettings ? 'Close Settings' : 'Settings'}
            </button>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white px-4 py-2 rounded-lg transition-all font-semibold border border-red-500/20 text-sm">
              <FaSignOutAlt /> Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 -mt-12">
        {showSettings && (
          <div className="bg-white p-8 rounded-2xl shadow-xl mb-10 border-t-4 border-yellow-500 animate-in fade-in slide-in-from-top-4 duration-500">
            <h2 className="text-blue-950 font-black uppercase text-xs tracking-widest mb-6">Update Account Information</h2>
            <form onSubmit={handleUpdate} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Username</label>
                <input 
                  type="text" 
                  id="username" 
                  placeholder="New username" 
                  className="p-4 border border-gray-100 rounded-xl bg-gray-50 outline-none focus:border-yellow-500 transition-all"
                  onChange={handleChange}
                  defaultValue={currentUser.username}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="New email" 
                  className="p-4 border border-gray-100 rounded-xl bg-gray-50 outline-none focus:border-yellow-500 transition-all"
                  onChange={handleChange}
                  defaultValue={currentUser.email}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Password</label>
                <input 
                  type="password" 
                  id="password" 
                  placeholder="••••••••" 
                  className="p-4 border border-gray-100 rounded-xl bg-gray-50 outline-none focus:border-yellow-500 transition-all"
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-end">
                <button className="w-full bg-blue-950 text-white p-4 rounded-xl font-black uppercase tracking-widest hover:bg-yellow-500 hover:text-blue-950 transition-all shadow-lg active:scale-95">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        )}

        {updateSuccess && (
          <p className="text-green-600 text-center font-bold mb-4">Profile updated successfully!</p>
        )}

        {/* --- STATS CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm flex items-center justify-between border-b-4 border-yellow-500">
            <div>
              <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Active Listings</p>
              <h2 className="text-3xl font-black text-blue-950">0</h2>
            </div>
            <FaHome className="text-4xl text-gray-100" />
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm flex items-center justify-between border-b-4 border-blue-950">
            <div>
              <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Saved Items</p>
              <h2 className="text-3xl font-black text-blue-950">0</h2>
            </div>
            <FaHeart className="text-4xl text-gray-100" />
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm flex items-center justify-between border-b-4 border-slate-300">
            <div>
              <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Closed Deals</p>
              <h2 className="text-3xl font-black text-blue-950">0</h2>
            </div>
            <FaCheckCircle className="text-4xl text-gray-100" />
          </div>
        </div>

        {/* --- DASHBOARD TABS --- */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
              <div className="p-5 border-b border-gray-50 bg-gray-50/50">
                <h3 className="font-black text-xs text-blue-950 uppercase tracking-widest">Account Manager</h3>
              </div>
              <nav className="p-2 space-y-1">
                <button 
                  onClick={() => setActiveTab('selling')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === 'selling' ? 'bg-blue-950 text-white shadow-lg shadow-blue-900/20' : 'text-gray-500 hover:bg-gray-50'}`}
                >
                  <FaHome className={activeTab === 'selling' ? 'text-yellow-400' : ''} /> My Listed Properties
                </button>
                <button 
                  onClick={() => setActiveTab('saved')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === 'saved' ? 'bg-blue-950 text-white shadow-lg shadow-blue-900/20' : 'text-gray-500 hover:bg-gray-50'}`}
                >
                  <FaHeart className={activeTab === 'saved' ? 'text-red-400' : ''} /> Interested / Saved
                </button>
              </nav>
            </div>
            
            <button className="w-full bg-yellow-500 text-blue-950 font-black py-4 rounded-2xl shadow-xl flex items-center justify-center gap-3 hover:bg-blue-900 hover:text-white transition-all transform hover:-translate-y-1 active:scale-95 text-sm uppercase tracking-widest">
              <FaPlus /> Create New Listing
            </button>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 min-h-[400px] flex flex-col">
              <h2 className="text-xl font-black text-blue-950 mb-8">
                {activeTab === 'selling' ? 'Inventory Management' : 'Interested Properties'}
              </h2>

              <div className="flex-grow flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-2">
                  {activeTab === 'selling' ? (
                    <FaHome className="text-gray-200 text-4xl" />
                  ) : (
                    <FaHeart className="text-gray-200 text-4xl" />
                  )}
                </div>
                <div className="max-w-xs">
                  <h4 className="font-bold text-blue-950 text-lg">No listings found</h4>
                  <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                    {activeTab === 'selling' 
                      ? "You haven't added any properties to our marketplace yet." 
                      : "You haven't saved any properties to your watchlist yet."}
                  </p>
                </div>
                <button 
                  className="mt-4 text-blue-600 font-bold text-sm hover:underline underline-offset-4 transition-all"
                  onClick={() => activeTab === 'selling' ? null : navigate('/search')}
                >
                  {activeTab === 'selling' ? 'Click the button on the left to start' : 'Explore current listings'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;