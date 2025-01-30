//ts-nocheck
import React, { useEffect, useState } from "react";
import {
  addNewProject,
  editProject,
  getAllProjects,
} from "../../api/project.ts"; // Adjust the path to the API file if necessary

const categories = [
  { name: "Ongoing Projects" },
  { name: "Completed Projects" },
  { name: "Featured Projects" },
];

const focusAreas = [
  { name: "Domain1" },
  { name: "Domain2" },
  { name: "Domain3" },
];

const ProjectAdmin = () => {
  const [newProject, setNewProject] = useState({
    title: "",
    image: null,
    description: "",
    overview: "",
    category: categories[0].name,
    keyHighlights: "",
    impactMetrics: "",
    focusArea: focusAreas[0].name,
  });
  const [projects, setProjects] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currEditId, setCurrEditId] = useState("");
  useEffect(() => {
    (async () => {
      const ps = await getAllProjects();
      setProjects(ps);
    })();
  }, []);

  const handleInputChange = (e) => {
    console.log(newProject.impactMetrics);
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewProject({ ...newProject, image: file });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", newProject.title);
    formData.append("description", newProject.description);
    formData.append("overview", newProject.overview);
    formData.append("category", newProject.category);
    formData.append("focusArea", newProject.focusArea);

    try {
      for (const [key, val] of formData.entries()) {
        console.log(key, val);
      }
      if (isEditing) {
        formData.append("keyHighlights", newProject.keyHighlights);

        formData.append("impactMetrics", newProject.impactMetrics);

        if (newProject.image) {
          formData.append("image", newProject.image);
        }
        const updated = await editProject(currEditId, formData);
        setProjects((prev) =>
          prev.map((p) => (p._id === updated._id ? updated : p)),
        );
      } else {
        formData.append("keyHighlights", newProject.keyHighlights);

        formData.append("impactMetrics", newProject.impactMetrics);

        formData.append("image", newProject.image);

        const result = await addNewProject(formData);
        console.log(result);
        setProjects((projs) => [
          ...projs,
          {
            ...result.project,
            imageUrl: `http://localhost:3000/files/${result.project.image}`,
          },
        ]);
      }
      setIsEditing(false);
      setCurrEditId("");

      alert("Project updated successfully!");

      // Reset form
      setNewProject({
        title: "",
        image: null,
        description: "",
        overview: "",
        category: categories[0].name,
        keyHighlights: "",
        impactMetrics: "",
      });
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  return (
    <div className="p-3 max-w-4xl rounded-lg mx-auto">
      <h1 className="text-3xl font-bold mb-6">Project Admin</h1>

      <div className="bg-white p-2 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Add New Project</h2>
        <form className="space-y-6" onSubmit={handleFormSubmit}>
          <div>
            <label className="block text-sm font-medium mb-2">Title</label>
            <input
              type="text"
              name="title"
              className="w-full border border-gray-300 rounded-lg p-3"
              placeholder="Enter project title"
              value={newProject.title}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              className="w-full border border-gray-300 rounded-lg p-3"
              onChange={handleFileChange}
              required={!isEditing}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Overview</label>
            <textarea
              name="overview"
              className="w-full border border-gray-300 rounded-lg p-3"
              placeholder="Enter project overview"
              value={newProject.overview}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Description
            </label>
            <textarea
              name="description"
              className="w-full border border-gray-300 rounded-lg p-3"
              placeholder="Enter project description"
              value={newProject.description}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Category</label>
            <select
              name="category"
              className="w-full border border-gray-300 rounded-lg p-3"
              value={newProject.category}
              onChange={handleInputChange}
              required
            >
              {categories.map((category, index) => (
                <option key={index} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Focus Area:
            </label>
            <select
              name="focusArea"
              className="w-full border border-gray-300 rounded-lg p-3"
              value={newProject.focusArea}
              onChange={handleInputChange}
              required
            >
              {focusAreas.map((category, index) => (
                <option key={index} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Key Highlights
            </label>
            <textarea
              name="keyHighlights"
              className="w-full border border-gray-300 rounded-lg p-3"
              placeholder="Enter key highlights (comma-separated)"
              value={newProject.keyHighlights}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Impact Metrics
            </label>
            <textarea
              name="impactMetrics"
              className="w-full border border-gray-300 rounded-lg p-3"
              placeholder='Enter impact metrics as JSON (e.g., {"users": "100", "revenue": "$500"})'
              value={newProject.impactMetrics}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition"
            >
              {isEditing ? "Edit" : "Add Project"}
            </button>
          </div>
        </form>
      </div>
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-4">Existing Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col"
            >
              <img
                src={
                  event.imageUrl
                    ? event.imageUrl
                    : event.image instanceof File
                      ? URL.createObjectURL(event.image)
                      : event.image
                }
                alt={event.title}
                className="rounded-md mb-4 object-cover h-40"
              />
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{event.description}</p>
              <p className="text-sm text-gray-600 mb-2">
                Overview: {event.overview}
              </p>

              <p className="text-sm text-gray-600 mb-2">
                Category: {event.category}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                Focus Area: {event.focusArea}
              </p>

              <p className="text-sm text-gray-600 mb-2">
                highlights:{" "}
                {event.keyHighlights.map((h) => (
                  <p>{h}</p>
                ))}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                Impact metrics: {JSON.stringify(event.impactMetrics)}
              </p>

              <button
                className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600"
                onClick={() => {
                  setIsEditing(true);
                  setCurrEditId(event._id);
                  setNewProject({
                    category: event.category,
                    description: event.description,
                    impactMetrics: JSON.stringify(event.impactMetrics),
                    keyHighlights: event.keyHighlights.map((h) => h),
                    overview: event.overview,
                    title: event.title,
                  });
                }}
              >
                Edit
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectAdmin;
