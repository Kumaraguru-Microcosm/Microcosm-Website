import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="space-y-6">
            <h2 className="md:text-3xl text-2xl font-bold text-white">
              Together, we achieve more.
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Join us in making a difference. Alone we can do so little, but
              together, we can create a bigger impact.
            </p>
            <Link to="/volunteer">
              <button className="border border-white text-white text-lg px-6 py-3 rounded-full shadow transition duration-300 ease-in-out hover:bg-white hover:text-black">
                Become a Volunteer
              </button>
            </Link>
          </div>

          <div className="space-y-4 text-gray-300">
            <h3 className="text-xl font-semibold text-white">Contact Us</h3>
            <p className="text-lg">0422-2661100</p>
            <p className="text-lg">microcosm.kct.ac.in</p>
            <p className="text-lg">
              Kumaraguru College of Technology
              <br /> Coimbatore - 641049.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Connect with Us</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
                <i className="fab fa-linkedin text-2xl"></i>Linkedin
              </a>
              <a href="https://facebook.com" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
                <i className="fab fa-facebook text-2xl"></i>Facebook
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
                <i className="fab fa-twitter text-2xl"></i>Twitter
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
                <i className="fab fa-instagram text-2xl"></i>Instagram
              </a>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-500" />

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white hover:underline transition duration-300 ease-in-out">
              Media and News
            </a>
            <a href="#" className="hover:text-white hover:underline transition duration-300 ease-in-out">
              Legal Documents
            </a>
            <a href="#" className="hover:text-white hover:underline transition duration-300 ease-in-out">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white hover:underline transition duration-300 ease-in-out">
              Terms and Conditions
            </a>
          </div>

          <p className="text-sm mt-6 md:mt-0">&copy; 2025. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
