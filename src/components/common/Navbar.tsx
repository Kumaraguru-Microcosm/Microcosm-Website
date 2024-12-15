import { useState, useEffect, useRef } from "react";
import logo from "../../assets/image.png";
import { NavbarEnum } from "../../data";
import { navbarAtom } from "../../jotai";
import { useAtom } from "jotai";

const Navbar = ({ notHome = false }: { notHome?: boolean }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(true); // Track intersection status
  const [nav, _] = useAtom(navbarAtom);
  const menuRef = useRef<any>(null);
  const hamburgerRef = useRef<any>(null);

  // Toggle hamburger menu
  const toggleMobileMenu = () => {
    console.log("clicked");
    console.log("here also setting,val before:", isMobileMenuOpen);
    setIsMobileMenuOpen((prev) => (!prev ? true : false));
  };

  // Close menu when clicking outside or scrolling
  const handleOutsideClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(e.target) &&
      !hamburgerRef.current.contains(e.target)
    ) {
      setIsMobileMenuOpen(false);
    }
  };

  const handleScroll = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-50px 0px 0px 0px" },
    );

    const heroSlider = document.querySelector("#hero-slider");
    if (heroSlider) {
      observer.observe(heroSlider);
    }

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

  return (
    <header
      className={`fixed top-0 left-0 w-full z-20 transition duration-300 ${
        notHome
          ? "shadow-lg"
          : isIntersecting
            ? "bg-transparent text-white"
            : "bg-white text-black shadow-lg"
      }`}
    >
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
              {(Object.keys(NavbarEnum) as (keyof typeof NavbarEnum)[]).map(
                (key, index) => (
                  <a
                    key={index}
                    href={`${key === NavbarEnum.Home ? "/" : "/" + key.toLowerCase()}`}
                    className={`px-3 py-2 hover:text-white rounded-md transition duration-300 hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 ${nav === NavbarEnum[key] ? "bg-gradient-to-r from-green-400 to-blue-500 text-white " : ""}`}
                  >
                    {NavbarEnum[key]}
                  </a>
                ),
              )}
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
            className="md:hidden p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            <svg
              ref={hamburgerRef}
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
        {isMobileMenuOpen ? (
          <div
            ref={menuRef}
            className="absolute top-16 left-0 w-full bg-gray-800 text-white shadow-lg md:hidden"
          >
            <div className="flex flex-col items-center space-y-2 py-4">
              {(Object.keys(NavbarEnum) as (keyof typeof NavbarEnum)[]).map(
                (key, index) => (
                  <a
                    key={index}
                    href={`${key === NavbarEnum.Home ? "/" : "/" + key.toLowerCase()}`}
                    className="block px-4 py-2 rounded-md transition duration-300 hover:bg-green-500 hover:text-white"
                    onClick={() => setIsMobileMenuOpen(false)} // Close menu after clicking a link
                  >
                    {NavbarEnum[key]}
                  </a>
                ),
              )}
            </div>
          </div>
        ) : (
          <></>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
