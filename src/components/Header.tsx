import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/image.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isGetInvolvedDropdownOpen, setIsGetInvolvedDropdownOpen] =
    useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isFocusAreasDropdownOpen, setIsFocusAreasDropdownOpen] =
    useState(false);
  const [isIntersecting, setIsIntersecting] = useState(true);
  const menuRef = useRef(null);

  const location = useLocation();
  const isProjectDetailsPage = location.pathname.startsWith("/details");
  const isProjectPage = location.pathname === "/projects";
  const isAboutPage = location.pathname === "/what-is-microcosm";
  const isHomePage = location.pathname === "/";
  const isEduAndEventsPage = location.pathname === "/eduAndEvents";
  const isVolunteerDisabled = import.meta.env.VITE_DISABLE_VOLUNTEER === "true";
  const isInternshipDisabled =
    import.meta.env.VITE_DISABLE_INTERNSHIP === "true";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleOutsideClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsMobileMenuOpen(false);
      setIsGetInvolvedDropdownOpen(false);
      setIsAboutDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isMobileMenuOpen || isGetInvolvedDropdownOpen || isAboutDropdownOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMobileMenuOpen, isGetInvolvedDropdownOpen, isAboutDropdownOpen]);

  // Intersection Observer logic (keep existing code)
  // ... (keep existing useEffect and getHeaderStyles code)
  useEffect(() => {
    const observeHeaderScroll = () => {
      const observer = new IntersectionObserver(
        ([entry]) => setIsIntersecting(entry.isIntersecting),
        { rootMargin: "-50px 0px 0px 0px" },
      );

      const heroSlider = document.querySelector("#hero-slider");
      if (heroSlider) observer.observe(heroSlider);

      return () => {
        if (heroSlider) observer.unobserve(heroSlider);
      };
    };

    if (isHomePage || isAboutPage || isProjectPage || isEduAndEventsPage) {
      observeHeaderScroll();
    }
  }, [isHomePage, isAboutPage, isProjectPage, isEduAndEventsPage]);

  const getHeaderStyles = () => {
    if (isEduAndEventsPage || isProjectPage) {
      return isIntersecting
        ? "bg-transparent text-white transition-all duration-300 ease-in-out"
        : "bg-white text-black shadow-lg transition-all duration-300 ease-in-out";
    }
    if (isAboutPage || isHomePage) {
      return isIntersecting
        ? "bg-transparent text-white transition-all duration-300 ease-in-out"
        : "bg-white text-black shadow-lg transition-all duration-300 ease-in-out";
    }
    return "bg-white text-black shadow-lg transition-all duration-300 ease-in-out";
  };

  let menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/what-is-microcosm" },
    { name: "Projects", path: "/projects" },
    { name: "Events", path: "/eduAndEvents" },
    { name: "Get Involved", path: "/get-involved" },
    { name: "Resources", path: "/resources" },
    { name: "Contact", path: "/contact" },
  ];
  if (isVolunteerDisabled && isInternshipDisabled) {
    menuItems = menuItems.filter((i) => i.name !== "Get Involved");
  }

  return (
    <header className={`fixed top-0 left-0 w-full z-20 ${getHeaderStyles()}`}>
      <nav className="w-full px-4 sm:px-6 lg:px-8 mt-2">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 sm:h-10 lg:h-12" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-between items-center">
            <div className="flex-1 flex justify-center space-x-4 lg:space-x-6">
              {menuItems.map((item, index) => {
                if (item.name === "Get Involved") {
                  return (
                    <div
                      key={index}
                      className="relative"
                      onMouseEnter={() => setIsGetInvolvedDropdownOpen(true)}
                      onMouseLeave={() => setIsGetInvolvedDropdownOpen(false)}
                    >
                      <NavLink
                        to={"#"}
                        className={({ isActive }) =>
                          `px-3 py-2 rounded-md transition duration-300 ${isActive
                            ? "font-bold"
                            : "hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500"
                          }`
                        }
                      >
                        {item.name}
                      </NavLink>
                      {isGetInvolvedDropdownOpen && (
                        <div className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md">
                          {!isVolunteerDisabled && (
                            <NavLink
                              to="/volunteer"
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              Volunteer
                            </NavLink>
                          )}
                          {!isInternshipDisabled && (
                            <NavLink
                              to="/internship"
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              Internship
                            </NavLink>
                          )}
                        </div>
                      )}
                    </div>
                  );
                }

                if (item.name === "About Us") {
                  return (
                    <div
                      key={index}
                      className="relative"
                      onMouseEnter={() => setIsAboutDropdownOpen(true)}
                      onMouseLeave={() => setIsAboutDropdownOpen(false)}
                    >
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          `px-3 py-2 rounded-md transition duration-300 ${isActive
                            ? "font-bold"
                            : "hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500"
                          }`
                        }
                      >
                        {item.name}
                      </NavLink>

                      {isAboutDropdownOpen && (
                        <div className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md z-30">
                          <NavLink
                            to="/what-is-microcosm"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            What is Microcosm
                          </NavLink>
                          <div
                            className="relative"
                            onMouseEnter={() =>
                              setIsFocusAreasDropdownOpen(true)
                            }
                            onMouseLeave={() =>
                              setIsFocusAreasDropdownOpen(false)
                            }
                          >
                            <span className="block px-4 py-2 hover:bg-gray-100 cursor-default">
                              Focus Areas
                            </span>
                            {isFocusAreasDropdownOpen && (
                              <div className="absolute left-full top-0 ml-1 w-48 bg-white text-black shadow-lg rounded-md z-40">
                                <NavLink
                                  to="/energy-and-emission"
                                  className="block px-4 py-2 hover:bg-gray-100"
                                >
                                  Energy And Emission
                                </NavLink>
                                <NavLink
                                  to="/water-security"
                                  className="block px-4 py-2 hover:bg-gray-100"
                                >
                                  Water Security
                                </NavLink>
                                <NavLink
                                  to="/waste-management"
                                  className="block px-4 py-2 hover:bg-gray-100"
                                >
                                  Waste Management
                                </NavLink>
                                <NavLink
                                  to="/biodiversity-enrichment"
                                  className="block px-4 py-2 hover:bg-gray-100"
                                >
                                  Biodiversity Enrichment
                                </NavLink>
                                <NavLink
                                  to="/awareness"
                                  className="block px-4 py-2 hover:bg-gray-100"
                                >
                                  Awareness
                                </NavLink>
                              </div>
                            )}
                          </div>
                          <NavLink
                            to="/teams"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Teams and Partners
                          </NavLink>
                          {/* <NavLink
                            to="/partners"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Partners
                          </NavLink> */}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={index}
                    to={item.path}
                    className={({ isActive }) =>
                      `px-3  rounded-md transition duration-300 ${isActive
                        ? "font-bold"
                        : "hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                );
              })}
            </div>
          </div>

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
                    `block px-4 py-2 rounded-md transition duration-300 ${isActive
                      ? "bg-green-500 font-bold"
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
