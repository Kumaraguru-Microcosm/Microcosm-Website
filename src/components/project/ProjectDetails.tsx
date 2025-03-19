import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../Header"; // Import Header component
import Footer from "../Footer"; // Import Footer component
import { getProjectById } from "../../api/project"; // API method for fetching project by ID

const ProjectDetails = () => {
  const { id } = useParams(); // Get project ID from the URL
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch project details when the component mounts
  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const data = await getProjectById(id); // Call API
        console.log("This is data:", data)
        setProject(data);
      } catch (error) {
        console.error("Error fetching project details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjectDetails();
  }, [id]);

  if (isLoading) {
    return (
      <>
        <Header />
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
          <p className="text-xl font-semibold text-gray-600">Loading project details...</p>
        </div>
        <Footer />
      </>
    );
  }

  if (!project) {
    return (
      <>
        <Header />
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
          <p className="text-xl font-semibold text-red-500">
            Oops! The project you are looking for was not found.
          </p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 py-12 bg-gray-50">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 font-semibold mb-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
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

        {/* Project Title */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
          {project.title}
        </h1>

        {/* Project Image */}
        <div className="relative mb-12">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-md"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg"></div>
        </div>

        {/* Project Details */}
        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Overview</h2>
            <p className="text-lg leading-relaxed text-gray-700">{project.overview}</p>
          </section>
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Description</h2>
            <p className="text-lg leading-relaxed text-gray-700">{project.description}</p>
          </section>

          {/* Additional sections such as Key Highlights, Impact Metrics, etc. */}
           {/* Key Highlights Section */}
           {project.keyHighlights && project.keyHighlights.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Key Highlights</h2>
              <ul className="space-y-2">
                {project.keyHighlights.map((highlight, index) => (
                  <li key={index} className="text-lg leading-relaxed text-gray-700 flex items-start">
                    <span className="mr-2 text-green-500">✓</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Impact Metrics Section */}
          {project.impactMetrics && Object.keys(project.impactMetrics).length > 0 && (
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Impact Metrics</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(project.impactMetrics).map(([metric, value], index) => (
                  <li
                    key={index}
                    className="p-4 bg-white shadow-sm rounded-lg border border-gray-200"
                  >
                    <h3 className="text-lg font-semibold text-gray-800">
                      {metric.replace(/([A-Z])/g, " $1")}
                    </h3>
                    <p className="text-lg text-gray-600">{value}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Volunteer Opportunities Section
          {project.volunteerOpportunities && project.volunteerOpportunities.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Volunteer Opportunities</h2>
              <ul className="space-y-2">
                {project.volunteerOpportunities.map((opportunity, index) => (
                  <li key={index} className="text-lg leading-relaxed text-gray-700 flex items-start">
                    <span className="mr-2 text-green-500">→</span>
                    {opportunity}
                  </li>
                ))}
              </ul>
            </section>
          )} */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetails;
