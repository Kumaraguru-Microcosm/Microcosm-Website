import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { Home, ClipboardList, Users, FileText, Menu, X, ChevronDown } from "lucide-react";

const AdminPage: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isDropdownOpen, setDropdownOpen] = useState(false); // State for dropdown
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: "Event", to: "/admin/event", icon: <FileText /> },
    { name: "Volunteer", to: "/admin/volunteer", icon: <Users /> },
    { name: "Blogs", to: "/admin/blogs", icon: <Home /> },
  ];

  const projectDropdownItems = [
    { name: "OnGoing Project", to: "/admin/project/ongoing" },
    { name: "Completed Project", to: "/admin/project/completed" },
    { name: "Featured Project", to: "/admin/project/featured" },
  ];

  // Navigate to a default route if the user lands on /admin
  useEffect(() => {
    if (location.pathname === "/admin") {
      navigate("/admin/project"); // Default sub-page route
    }
  }, [location.pathname, navigate]);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside
        className={`bg-gray-800 text-white transition-transform duration-300 ${
          isSidebarOpen ? "w-72" : "w-24"
        } flex flex-col`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
          <h2
            className={`text-2xl font-bold ${
              isSidebarOpen ? "block" : "hidden"
            }`}
          >
            Admin Dashboard
          </h2>
          <button
            className="text-gray-400 hover:text-white"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <X /> : <Menu />}
          </button>
        </div>
        <nav className="flex-1 mt-4">
          <ul className="space-y-4">
            {/* Project Dropdown */}
            <li className="relative">
              <button
                className="flex items-center justify-between w-full px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded"
                onClick={() => setDropdownOpen(!isDropdownOpen)}
              >
                <div className="flex items-center gap-4">
                  <ClipboardList />
                  <span className={`${isSidebarOpen ? "block" : "hidden"}`}>
                  <Link
                  to={"/admin/project"}
                  className="flex items-center gap-4 px-2 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded"
                >
                  <span className={`${isSidebarOpen ? "block" : "hidden"}`}>
                    Projects
                  </span>
                </Link>
                  </span>
                </div>
                <ChevronDown
                  className={`transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  } ${isSidebarOpen ? "block" : "hidden"}`}
                />
              </button>
              {isDropdownOpen && (
                <ul className="pl-12 mt-2 space-y-2">
                  {projectDropdownItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.to}
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white rounded"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            {/* Other Menu Items */}
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.to}
                  className="flex items-center gap-4 px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded"
                >
                  {item.icon}
                  <span className={`${isSidebarOpen ? "block" : "hidden"}`}>
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="px-6 py-4 border-t border-gray-700 text-sm text-center text-gray-400">
          © 2025 Admin Dashboard
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-100">
        {/* Header */}
        <header className="bg-white shadow px-8 py-6 flex items-center justify-between">
          <button
            onClick={() => navigate("/")} // Navigate to the root route
            className="flex items-center text-gray-500 hover:text-gray-700 font-semibold space-x-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            <span>Back</span>
          </button>
          <h1 className="text-2xl font-semibold">Welcome, Admin</h1>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-8">
          <div className="max-w-6xl mx-auto bg-white shadow rounded-lg p-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminPage;
