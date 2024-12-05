import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/image.png';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSecondDropdownOpen, setIsSecondDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dropdownRef = useRef(null);
  const secondDropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsSecondDropdownOpen(false);
  };

  const toggleSecondDropdown = () => {
    setIsSecondDropdownOpen(!isSecondDropdownOpen);
    setIsDropdownOpen(false);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false); // Close the mobile menu when a link is clicked
    }
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current && !dropdownRef.current.contains(event.target) &&
      secondDropdownRef.current && !secondDropdownRef.current.contains(event.target)
    ) {
      setIsDropdownOpen(false);
      setIsSecondDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="absolute top-0 left-0 w-full z-20">
      <nav className="w-full bg-transparent">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center ml-4">
              <img src={logo} alt="Logo" className="h-10" />
            </div>

            {/* Desktop Navigation */}
            <div className="flex-1 flex justify-center space-x-6">
              <a
                href="#home"
                onClick={() => handleLinkClick('home')}
                className={`text-white px-3 py-2 rounded-md transition duration-300 ${activeLink === 'home' ? 'bg-gray-400 text-dark' : 'hover:bg-gray-300 hover:text-dark'}`}
              >
                Home
              </a>
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={toggleDropdown}
                  className="text-white px-3 py-2 rounded-md hover:bg-gray-400 hover:text-dark transition duration-300"
                >
                  What We Do
                </button>
                <div className={`${isDropdownOpen ? 'block' : 'hidden'} absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200`}>
                  <a href="#link1" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-blue-500 transition-colors duration-200">
                    Option 1
                  </a>
                  <a href="#link2" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-blue-500 transition-colors duration-200">
                    Option 2
                  </a>
                </div>
              </div>
              <a
                href="#about"
                onClick={() => handleLinkClick('about')}
                className={`text-white px-3 py-2 rounded-md transition duration-300 ${activeLink === 'about' ? 'bg-gray-400 text-dark' : 'hover:bg-gray-300 hover:text-dark'}`}
              >
                Who are we
              </a>
              <div className="relative" ref={secondDropdownRef}>
                <button
                  onClick={toggleSecondDropdown}
                  className="text-white px-3 py-2 rounded-md hover:bg-gray-400 hover:text-dark transition duration-300"
                >
                  Get Involved
                </button>
                <div className={`${isSecondDropdownOpen ? 'block' : 'hidden'} absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200`}>
                  <a href="#link1" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-blue-500 transition-colors duration-200">
                    Option 1
                  </a>
                  <a href="#link2" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-blue-500 transition-colors duration-200">
                    Option 2
                  </a>
                </div>
              </div>
              <a
                href="#about-us"
                onClick={() => handleLinkClick('about-us')}
                className={`text-white px-3 py-2 rounded-md transition duration-300 ${activeLink === 'about-us' ? 'bg-gray-400 text-dark' : 'hover:bg-gray-300 hover:text-dark'}`}
              >
                About Us
              </a>
              <a
                href="#shop"
                onClick={() => handleLinkClick('shop')}
                className={`text-white px-3 py-2 rounded-md transition duration-300 ${activeLink === 'shop' ? 'bg-gray-400 text-dark' : 'hover:bg-gray-300 hover:text-dark'}`}
              >
                Shop
              </a>
            </div>

            {/* Sign In Button */}
            <a
              href="#signin"
              onClick={() => handleLinkClick('signin')}
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:from-blue-400 hover:to-green-500 transition duration-300 mr-4 ml-auto"
            >
              Sign In
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
