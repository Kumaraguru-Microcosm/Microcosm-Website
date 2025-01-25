// src/pages/AdminPage.tsx
import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Home, ClipboardList, Users, FileText, Menu, X } from "lucide-react";

const AdminPage: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate(); 

  const menuItems = [
    { name: "Project", to: "/admin/project", icon: <ClipboardList /> },
    { name: "Event", to: "/admin/event", icon: <FileText /> },
    { name: "Volunteer", to: "/admin/volunteer", icon: <Users /> },
    { name: "Blogs", to: "/admin/blogs", icon: <Home /> },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`bg-gray-800 text-white transition-transform duration-300 ${isSidebarOpen ? "w-64" : "w-20"
          } flex flex-col`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-700">
          <h2
            className={`text-xl font-bold ${isSidebarOpen ? "block" : "hidden"
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
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.to}
                  className="flex items-center gap-4 px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded"
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
        <div className="px-4 py-4 border-t border-gray-700 text-sm text-center text-gray-400">
          © 2025 Admin Dashboard
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-100">
        {/* Header */}
        <header className="bg-white shadow px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate("/")} // Navigate to the previous page
            className="flex items-center text-gray-500 hover:text-gray-700 font-semibold space-x-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            <span>Back</span>
          </button>
          <h1 className="text-xl font-semibold">Welcome, Admin</h1>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto bg-white shadow rounded-lg p-6">
            <Outlet />
          </div>
        </main>
      </div>

    </div>
  );
};

export default AdminPage;
