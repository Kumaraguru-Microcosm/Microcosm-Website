import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/image.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(true);
  const menuRef = useRef(null);

  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleOutsideClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsMobileMenuOpen(false);
    }
  };

  const handleScroll = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { rootMargin: "-50px 0px 0px 0px" }
    );

    const heroSlider = document.querySelector("#hero-slider");
    if (heroSlider) observer.observe(heroSlider);

    return () => {
      if (heroSlider) observer.unobserve(heroSlider);
    };
  }, []);

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

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Who are we", path: "/who-are-we" },
    { name: "Get Involved", path: "/get-involved" },
    { name: "About Us", path: "/about" },
    { name: "Shop", path: "/shop" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-20 transition duration-300 ${
        isAboutPage
          ? isIntersecting
            ? "bg-transparent text-white"
            : "bg-white text-black shadow-lg"
          : isIntersecting
          ? "bg-transparent text-white"
          : "bg-white text-black shadow-lg"
      }`}
    >
      <nav className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 sm:h-10 lg:h-12" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-between items-center">
            <div className="flex-1 flex justify-center space-x-4 lg:space-x-6">
              {menuItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md transition duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-green-400 to-blue-500 text-white"
                        : "hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
            <a
              href="#signin"
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:from-blue-400 hover:to-green-500 transition duration-300"
            >
              Sign In
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
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
              {menuItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-md transition duration-300 ${
                      isActive
                        ? "bg-green-500 text-white"
                        : "hover:bg-green-500 hover:text-white"
                    }`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
