import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">Caulcrick Estate Company</h2>
          <p className="text-sm text-gray-300">
            Trusted real estate company helping you find modern modular homes and properties across Nigeria.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-yellow-400">About Us</Link></li>
            <li><Link to="/properties" className="hover:text-yellow-400">Properties</Link></li>
            <li><Link to="/sign-in" className="hover:text-yellow-400">Sign In</Link></li>
            <li><Link to="/sign-up" className="hover:text-yellow-400">Sign Up</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>📍 Lekki, Lagos, Nigeria</li>
            <li>📞 08027955268</li>
            <li>✉️ info@caulcrickestate.com</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4 text-gray-300">
            <a href="#" className="hover:text-yellow-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-yellow-400"><FaTwitter /></a>
            <a href="#" className="hover:text-yellow-400"><FaInstagram /></a>
            <a href="#" className="hover:text-yellow-400"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-6">
        <p className="text-center text-sm text-gray-400 py-4">
          © {new Date().getFullYear()} Caulcrick Estate Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
