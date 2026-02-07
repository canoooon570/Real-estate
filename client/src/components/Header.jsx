import React, { useState } from 'react';
import { FaSearch, FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerSearch, setHeaderSearch] = useState("");

  const isActive = (path) => location.pathname === path;

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/properties?search=${headerSearch}`);
    setMenuOpen(false);
  };

  return (
    <header className="bg-white border-t-yellow-500 border-t-4 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* --- LOGO --- */}
          <Link to="/" className="flex-shrink-0 flex flex-col group">
            <h1 className="font-extrabold text-xl sm:text-2xl leading-none tracking-tighter">
              <span className="text-blue-950 group-hover:text-slate-700 transition">CAULCRICK</span>
            </h1>
            <span className="text-[10px] sm:text-xs font-bold text-yellow-600 tracking-[0.3em] uppercase">
              Estate Company
            </span>
          </Link>

          {/* --- SEARCH BAR (Refined) --- */}
          <form 
            className="hidden md:flex items-center bg-gray-50 border border-gray-200 px-4 py-2 rounded-full focus-within:border-yellow-500 focus-within:ring-1 focus-within:ring-yellow-500 transition-all w-full max-w-md mx-8"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Search by location or property type..."
              className="bg-transparent focus:outline-none w-full text-sm text-slate-700"
              value={headerSearch}
              onChange={(e) => setHeaderSearch(e.target.value)}
            />
            <button type="submit" className="text-slate-400 hover:text-yellow-600 transition">
              <FaSearch />
            </button>
          </form>

          {/* --- RIGHT SECTION --- */}
          <div className="flex items-center gap-4">
            
            {/* Call Action - Professional Icon Version */}
            <a 
              href="tel:08027955268" 
              className="hidden lg:flex items-center gap-2 bg-blue-950 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md hover:bg-yellow-500 hover:text-blue-950 transition-all active:scale-95"
            >
              <FaPhoneAlt className="text-xs" />
              <span>0802 795 5268</span>
            </a>

            {/* Menu Toggle */}
            <div className="relative">
              <button 
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 text-blue-950 font-bold hover:bg-yellow-500 hover:text-white transition-all"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <FaTimes /> : <FaBars />}
                <span className="hidden sm:inline">MENU</span>
              </button>

              {/* --- DROPDOWN MENU (Glassmorphism Effect) --- */}
              {menuOpen && (
                <div className="absolute right-0 mt-3 w-56 bg-white/95 backdrop-blur-md border border-gray-100 shadow-2xl rounded-xl overflow-hidden z-50 animate-in fade-in zoom-in duration-200">
                  <ul className="py-2">
                    {[
                      { name: 'Home', path: '/' },
                      { name: 'Properties', path: '/properties' },
                      { name: 'About Us', path: '/about' },
                      { name: 'Profile', path: '/profile' },
                      { name: 'Sign In', path: '/sign-in' },
                      { name: 'Create Account', path: '/sign-up' },
                    ].map((item) => (
                      <li key={item.path}>
                        <Link 
                          to={item.path} 
                          onClick={() => setMenuOpen(false)}
                          className={`block px-5 py-3 text-sm font-bold transition-colors ${
                            isActive(item.path) 
                            ? "bg-yellow-500 text-white" 
                            : "text-blue-950 hover:bg-gray-50 hover:text-yellow-600"
                          }`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {/* Mobile Search - Only shows when menu is open on mobile */}
                  <form className="md:hidden p-4 border-t border-gray-100" onSubmit={handleSubmit}>
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Search..." 
                        className="w-full bg-gray-100 rounded-lg py-2 px-3 text-sm focus:outline-none"
                        value={headerSearch}
                        onChange={(e) => setHeaderSearch(e.target.value)}
                      />
                      <button className="absolute right-3 top-2.5 text-gray-400">
                        <FaSearch size={14} />
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;