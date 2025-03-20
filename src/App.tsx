import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import ProjectDetails from "./components/project/ProjectDetails";
import GetInvolved from "./pages/GetInvolved";
import Resources from "./pages/Resources";
import PostDetail from "./pages/PostDetail";
import EducationAndEvents from "./pages/EducationAndEventsPage";
import SessionDetails from "./components/events/SessionDetails";
import AdminPage from "./pages/AdminPage";
import ProjectAdmin from "./components/project/ProjectAdmin";
import BlogsAdmin from "./pages/BlogsAdmin";
import EventAdmin from "./components/events/EventAdmin";
import { getAllBlogs } from "./api/blog";
import VolunteerShowcase from "./pages/VolunteerShowcase";
import InternshipForm from "./components/InternshipForm";
import AdminInternship from "./components/AdminInternship";
import Contact from "./pages/Contact";
import EnergyAndEmission from "./components/FocusAreas/EnergyAndEmission";
import WasteManagement from "./components/FocusAreas/WasteManagment";
import WaterSecurity from "./components/FocusAreas/WaterSecurity";
import BiodiversityEnergyEmission from "./components/FocusAreas/BiodiversityEnergyEmission";
import StudentStewardshipPrograms from "./components/FocusAreas/StudentStewardshipPrograms";
import TeamAndPartners from "./components/About/TeamAndPartners";
import Maintenance from "./components/Maintenance";
import { NotFound } from "./components/NotFound";

// Loader Component
const Loader = () => (
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
    <h2>Loading...</h2>
  </div>
);

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // New loading state

  useEffect(() => {
    (async () => {
      try {
        const p = await getAllBlogs();
        setPosts(p);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    })();
  }, []);

  const isMaintenanceMode = import.meta.env.VITE_MAINTENANCE === "true";
  const isAdminDisabled = import.meta.env.VITE_DISABLE_ADMIN === "true";

  if (loading) return <Loader />; // Show loader while loading

  return (
    <Router>
      <Routes>
        {isMaintenanceMode ? (
          <Route path="*" element={<Maintenance />} />
        ) : (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/what-is-microcosm" element={<AboutPage />} />
            <Route path="/teams" element={<TeamAndPartners />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/details/:id" element={<ProjectDetails />} />
            <Route path="/resources" element={<Resources posts={posts} />} />
            <Route path="/post/:id" element={<PostDetail posts={posts} />} />
            <Route path="/eduAndEvents" element={<EducationAndEvents />} />
            <Route path="/sessionDetails/:id" element={<SessionDetails />} />
            <Route path="/volunteer" element={<GetInvolved />} />
            <Route path="/internship" element={<InternshipForm />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/energy-and-emission" element={<EnergyAndEmission />} />
            <Route path="/waste-management" element={<WasteManagement />} />
            <Route path="/water-security" element={<WaterSecurity />} />
            <Route path="/biodiversity-enrichment" element={<BiodiversityEnergyEmission />} />
            <Route path="/awareness" element={<StudentStewardshipPrograms />} />

            {!isAdminDisabled && (
              <Route path="/admin" element={<AdminPage />}>
                <Route path="volunteer" element={<VolunteerShowcase />} />
                <Route path="project" element={<ProjectAdmin />} />
                <Route path="blogs" element={<BlogsAdmin />} />
                <Route path="event" element={<EventAdmin />} />
                <Route path="internship" element={<AdminInternship />} />
              </Route>
            )}

            <Route path="*" element={<NotFound />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
