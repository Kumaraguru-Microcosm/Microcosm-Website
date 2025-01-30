import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage"; // Adjust path as needed
import AboutPage from "./pages/AboutPage"; // Import AboutPage
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
const posts1 = [
  {
    id: 1,
    title: "exploring the amazon rainforest",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident consequatur delectus odit omnis, illum dolore officiis totam ipsa dignissimos, tempora consequuntur vitae! Modi quisquam nisi doloremque, harum voluptates consequatur veniam et quia, quis amet dolore, exercitationem provident? Natus corrupti aliquam iure distinctio eveniet aspernatur recusandae, nisi in sapiente, omnis, corporis ut debitis sint. In sapiente perferendis cupiditate maiores saepe vitae nesciunt magnam, deserunt facere debitis, excepturi sit nemo at cumque iste eius. Omnis cupiditate ipsa sunt ipsum accusantium numquam expedita eveniet fugiat. Provident perferendis quam, fuga labore perspiciatis qui. Necessitatibus magnam eligendi neque deserunt, ratione dolores nobis alias nam dolor.",
    image: "https://via.placeholder.com/600x300",
    date: "2024-12-15",
  },
  {
    id: 2,
    title: "the majesty of the himalayas",
    content:
      "the himalayas are home to some of the world's highest peaks, including mount everest...",
    image: "https://via.placeholder.com/600x300",
    date: "2024-12-10",
  },
  {
    id: 3,
    title: "coral reefs: underwater rainforests",
    content:
      "coral reefs are vibrant ecosystems that support a wide variety of marine life...",
    image: "https://via.placeholder.com/600x300",
    date: "2024-12-05",
  },
  {
    id: 4,
    title: "exploring the amazon rainforest",
    content:
      "the amazon rainforest is one of the most biodiverse regions on the planet...",
    image: "https://via.placeholder.com/600x300",
    date: "2024-12-15",
  },
  {
    id: 5,
    title: "the majesty of the himalayas",
    content:
      "the himalayas are home to some of the world's highest peaks, including mount everest...",
    image: "https://via.placeholder.com/600x300",
    date: "2024-12-10",
  },
  {
    id: 6,
    title: "coral reefs: underwater rainforests",
    content:
      "coral reefs are vibrant ecosystems that support a wide variety of marine life...",
    image: "https://via.placeholder.com/600x300",
    date: "2024-12-05",
  },
];

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (async () => {
      const p = await getAllBlogs();
      setPosts(p);
    })();
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/details/:id" element={<ProjectDetails />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/resources" element={<Resources posts={posts} />} />
        <Route path="/post/:id" element={<PostDetail posts={posts} />} />
        <Route path="/eduAndEvents" element={<EducationAndEvents />} />
        <Route path="/sessionDetails/:id" element={<SessionDetails />} />
        <Route path="/volunteer" element={<GetInvolved />} />
        <Route path="/internship" element={<InternshipForm />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/internship" element={<Internship />} /> */}
        <Route path="/energy-and-emission" element={<EnergyAndEmission />} />
        <Route path="/waste-management" element={<WasteManagement />} />
        <Route path="/water-security" element={<WaterSecurity />} />
        <Route
          path="/biodiversity-enrichment"
          element={<BiodiversityEnergyEmission />}
        />
        <Route path="/awareness" element={<StudentStewardshipPrograms />} />

        <Route path="/admin" element={<AdminPage />}>
          <Route path="volunteer" element={<VolunteerShowcase />} />
          <Route path="project" element={<ProjectAdmin />} />
          <Route path="blogs" element={<BlogsAdmin />} />
          <Route path="event" element={<EventAdmin />} />
          <Route path="internship" element={<AdminInternship />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
