import React from 'react';
import { FaBuilding, FaUsers, FaAward, FaHandshake } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <img 
          src="/rimage3.webp" 
          alt="Modern Architecture" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-950/80 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center px-4">
          <span className="text-yellow-400 font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
            Establishing Excellence
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            About <span className="text-yellow-500">Caulcrick</span>
          </h1>
          <div className="h-1.5 w-24 bg-yellow-500 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* --- OUR STORY SECTION --- */}
      <section className="max-w-7xl mx-auto py-20 px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="/sliderimg5.webp" 
              alt="Our Office" 
              className="rounded-2xl shadow-2xl relative z-10 w-full h-[500px] object-cover"
            />
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-yellow-500 rounded-2xl -z-0 hidden lg:block"></div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950">
              Redefining the Landscape of <br />
              <span className="text-yellow-600 font-light">Nigerian Real Estate</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Founded on the principles of integrity and innovation, Caulcrick Estate Company 
              has grown from a visionary startup into a premier destination for modern modular 
              homes and luxury properties. 
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              We don't just sell houses; we curate lifestyles. Our team works tirelessly to 
              ensure that every plot of land and every brick laid aligns with the highest 
              standards of safety, aesthetics, and functionality.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-950">
                  <FaBuilding size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-blue-950">200+</h4>
                  <p className="text-sm text-gray-500">Units Sold</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-yellow-100 p-3 rounded-lg text-yellow-600">
                  <FaUsers size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-blue-950">150+</h4>
                  <p className="text-sm text-gray-500">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE VALUES --- */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">Our Core Values</h2>
          <p className="text-gray-500 max-w-2xl mx-auto italic">
            "The foundation of our company is built on the trust of our clients."
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Value 1 */}
          <div className="bg-white p-10 rounded-2xl shadow-sm border-b-4 border-blue-950 hover:shadow-xl transition-all duration-300">
            <FaAward className="text-yellow-500 text-4xl mb-6" />
            <h3 className="text-xl font-bold text-blue-950 mb-4">Premium Quality</h3>
            <p className="text-gray-600">
              We select only the finest materials and designs to ensure your home stands 
              the test of time and weather.
            </p>
          </div>

          {/* Value 2 */}
          <div className="bg-white p-10 rounded-2xl shadow-sm border-b-4 border-yellow-500 hover:shadow-xl transition-all duration-300">
            <FaHandshake className="text-blue-950 text-4xl mb-6" />
            <h3 className="text-xl font-bold text-blue-950 mb-4">Absolute Transparency</h3>
            <p className="text-gray-600">
              No hidden fees, no complicated jargon. We provide clear documentation 
              and honest advice every step of the way.
            </p>
          </div>

          {/* Value 3 */}
          <div className="bg-white p-10 rounded-2xl shadow-sm border-b-4 border-blue-950 hover:shadow-xl transition-all duration-300">
            <FaBuilding className="text-yellow-500 text-4xl mb-6" />
            <h3 className="text-xl font-bold text-blue-950 mb-4">Innovation</h3>
            <p className="text-gray-600">
              Embracing modular and smart technology to make modern living more 
              accessible and sustainable.
            </p>
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-blue-950 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to find your space?</h2>
            <p className="text-blue-200 text-lg mb-10 max-w-xl mx-auto">
              Our consultants are ready to walk you through our current listings 
              and investment opportunities.
            </p>
            <button className="bg-yellow-500 text-blue-950 font-bold px-10 py-4 rounded-full hover:bg-white transition-all transform hover:scale-105 active:scale-95">
              Contact Our Team
            </button>
          </div>
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-yellow-500/10 rounded-full -ml-10 -mb-10"></div>
        </div>
      </section>
    </div>
  );
};

export default About;