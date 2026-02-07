import React from "react";
import SliderSection from "../components/SliderSection";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="  w-full bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[90vh] overflow-hidden">
        {/* Background image with subtle zoom effect */}
        <img
          src="/rimage3.webp"
          alt="Luxury modern home"
          className="w-full h-full object-cover"
        />

        {/* Sophisticated Gradient Overlay (Dark on the left, clear on the right) */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/70 to-transparent"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 w-full">
            <div className="max-w-2xl">
              <span className="text-yellow-400 pt-17 font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-0 block">
                Premium Real Estate
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                Browse The Top <br />
                <span className="text-yellow-400">Modern Modular</span> <br />
                Homes
              </h1>
              <p className="text-gray-200 text-lg sm:text-xl lg:text-2xl mb-8 leading-relaxed max-w-lg">
                Exquisite properties designed for the modern lifestyle. 
                Experience luxury living in Nigeria's most prestigious locations.
              </p>

              <div className="flex flex-wrap gap-4 pb-20">
                <button
                  onClick={() => navigate("/properties")}
                  className="px-8 py-4 bg-yellow-500 text-blue-950 font-bold rounded-sm shadow-xl hover:bg-white transition-all duration-300 transform hover:-translate-y-1"
                >
                  Browse Homes Now
                </button>
                <button
                  onClick={() => navigate("/about")}
                  className="px-8 py-4 border border-white text-white font-bold rounded-sm hover:bg-white/10 transition-all"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS/TRUST BAR --- (Added to bridge the gap and look professional) */}
      <div className="bg-blue-950 py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-yellow-400 text-3xl font-bold">20+</h3>
            <p className="text-white/70 text-sm uppercase tracking-widest">Listings</p>
          </div>
          <div>
            <h3 className="text-yellow-400 text-3xl font-bold">100%</h3>
            <p className="text-white/70 text-sm uppercase tracking-widest">Secure</p>
          </div>
          <div>
            <h3 className="text-yellow-400 text-3xl font-bold">24/7</h3>
            <p className="text-white/70 text-sm uppercase tracking-widest">Support</p>
          </div>
          <div>
            <h3 className="text-yellow-400 text-3xl font-bold">500+</h3>
            <p className="text-white/70 text-sm uppercase tracking-widest">Clients</p>
          </div>
        </div>
      </div>

      {/* --- FEATURED SECTION --- */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-950">Featured Properties</h2>
            <div className="h-1 w-20 bg-yellow-400 mt-2"></div>
          </div>
          <p className="text-gray-500 mt-4 md:mt-0 max-w-sm">
            Handpicked selections of our most exclusive modular homes available right now.
          </p>
        </div>
        
        <SliderSection />
      </div>

      <Footer />
    </div>
  );
};

export default Home;