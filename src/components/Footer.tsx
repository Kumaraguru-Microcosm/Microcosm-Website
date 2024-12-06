import React from "react";
import backgroundImage from "../assets/microcosmBackgroundImage.png";

const Footer = () => {
  return (
    <footer
      className="relative bg-cover bg-center text-white py-12"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(243, 244, 246, 1), rgba(243, 244, 246, 0.8), rgba(243, 244, 246, 0)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">
              Together, we achieve more.
            </h2>
            <p className="text-gray-200 leading-relaxed">
              Join us in making a difference. Alone we can do so little, but
              together, we can create a bigger impact.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-teal-400 text-white text-lg px-6 py-3 rounded-full shadow hover:from-blue-600 hover:to-teal-500 transition duration-300 ease-in-out">
              Become a Volunteer
            </button>
          </div>

          <div className="space-y-4 text-gray-300">
            <h3 className="text-xl font-semibold text-white">Contact Us</h3>
            <p className="text-lg">+91 xxxxxxxxxx / +91 xxxxxxxxxx</p>
            <p className="text-lg">microcosm.in</p>
            <p className="text-lg">
              Kumaraguru College of Technology
              <br /> Coimbatore - 648921
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Connect with Us</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              <a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
              >
                <i className="fab fa-linkedin text-2xl"></i>Linkedin
              </a>
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
              >
                <i className="fab fa-facebook text-2xl"></i>Facebook
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
              >
                <i className="fab fa-twitter text-2xl"></i>Twitter
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
              >
                <i className="fab fa-instagram text-2xl"></i>Instagram
              </a>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-500" />

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
          <div className="flex space-x-6">
            <a
              href="#"
              className="hover:text-white hover:underline transition duration-300 ease-in-out"
            >
              Media and News
            </a>
            <a
              href="#"
              className="hover:text-white hover:underline transition duration-300 ease-in-out"
            >
              Legal Documents
            </a>
            <a
              href="#"
              className="hover:text-white hover:underline transition duration-300 ease-in-out"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-white hover:underline transition duration-300 ease-in-out"
            >
              Terms and Conditions
            </a>
          </div>

          <p className="text-sm mt-6 md:mt-0">&copy; 2024. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
