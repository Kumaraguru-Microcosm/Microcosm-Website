import { useState, useEffect, useRef } from "react";
import logo from "../assets/image.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Toggle hamburger menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Close menu when clicking outside or scrolling
  const handleOutsideClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsMobileMenuOpen(false);
    }
  };

  const handleScroll = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("scroll", handleScroll);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("scroll", handleScroll);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("scroll", handleScroll);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-20 bg-transparent">
      <nav className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-between items-center">
            {/* Center Links */}
            <div className="flex-1 flex justify-center space-x-6">
              {["Home", "Who are we", "Get Involved", "About Us", "Shop"].map((item, index) => (
                <a
                  key={index}
                  href={`#${item.replace(/\s+/g, "-").toLowerCase()}`}
                  className="text-white px-3 py-2 rounded-md transition duration-300 hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Sign In Button */}
            <a
              href="#signin"
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:from-blue-400 hover:to-green-500 transition duration-300"
            >
              Sign In
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            ref={menuRef}
            className="absolute top-16 left-0 w-full bg-gray-800 text-white shadow-lg md:hidden"
          >
            <div className="flex flex-col items-center space-y-2 py-4">
              {["Home", "Who are we", "Get Involved", "About Us", "Shop", "Sign In"].map(
                (item, index) => (
                  <a
                    key={index}
                    href={`#${item.replace(/\s+/g, "-").toLowerCase()}`}
                    className="block px-4 py-2 rounded-md transition duration-300 hover:bg-green-500 hover:text-white"
                    onClick={() => setIsMobileMenuOpen(false)} // Close menu after clicking a link
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;






