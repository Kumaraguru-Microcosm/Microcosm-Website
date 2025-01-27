import React, { useState } from "react";

const categories = [
  { name: "Ongoing Projects" },
  { name: "Completed Projects" },
  { name: "Featured Projects" },
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
  });

  const handleInputChange = (e) => {
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
    formData.append("image", newProject.image);
    formData.append("description", newProject.description);
    formData.append("overview", newProject.overview);
    formData.append("category", newProject.category);
    formData.append("keyHighlights", newProject.keyHighlights);
    formData.append("impactMetrics", newProject.impactMetrics);

    try {
      await fetch("http://your-api-url.com/projects/new", {
        method: "POST",
        body: formData,
      });
      alert("Project added successfully!");
    } catch (error) {
      console.error("Error adding project:", error);
    }

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
  };

  return (
    <div className="p-3 max-w-4xl rounded-lg  mx-auto">
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
            <label className="block text-sm font-medium mb-2">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              className="w-full border border-gray-300 rounded-lg p-3"
              onChange={handleFileChange}
              required
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
            <label className="block text-sm font-medium mb-2">Description</label>
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
            <label className="block text-sm font-medium mb-2">Key Highlights</label>
            <textarea
              name="keyHighlights"
              className="w-full border border-gray-300 rounded-lg p-3"
              placeholder="Enter key highlights (comma-separated)"
              value={newProject.keyHighlights}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Impact Metrics</label>
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
              Add Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectAdmin;
