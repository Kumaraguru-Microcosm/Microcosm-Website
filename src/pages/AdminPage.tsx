// src/pages/AdminPage.tsx
import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminPage: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-1/4 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link to="/admin/project" className="hover:text-gray-300">
                Project
              </Link>
            </li>
            <li>
              <Link to="/admin/event" className="hover:text-gray-300">
                Event
              </Link>
            </li>
            <li>
              <Link to="/admin/volunteer" className="hover:text-gray-300">
                Volunteer
              </Link>
            </li>
            <li>
              <Link to="/admin/blogs" className="hover:text-gray-300">
                Blogs
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="w-3/4 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminPage;
