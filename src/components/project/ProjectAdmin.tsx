import React, { useState } from "react";

const categories = [
  { name: "Ongoing Projects" },
  { name: "Completed Projects" },
  { name: "Featured Projects" },
];

const ProjectAdmin = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].name);
  const [newProject, setNewProject] = useState({
    title: "",
    image: null,
    description: "",
    overview: "",
    category: categories[0].name,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewProject({ ...newProject, image: file });
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setNewProject((prev) => ({ ...prev, category }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", newProject.title);
    formData.append("image", newProject.image);
    formData.append("description", newProject.description);
    formData.append("overview", newProject.overview);
    formData.append("category", newProject.category);

    try {
      // Example API call to upload the project
      await fetch("http://your-api-url.com/projects", {
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
      category: activeCategory,
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Project Admin</h1>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Add New Project</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleFormSubmit}>
          <div>
            <label className="block text-sm font-medium">Title</label>
            <input
              type="text"
              name="title"
              className="mt-1 w-full border rounded-md p-2"
              value={newProject.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              className="mt-1 w-full border rounded-md p-2"
              onChange={handleFileChange}
              required
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium">Description</label>
            <input
              type="text"
              name="description"
              className="mt-1 w-full border rounded-md p-2"
              value={newProject.description}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium">Overview</label>
            <textarea
              name="overview"
              className="mt-1 w-full border rounded-md p-2"
              value={newProject.overview}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium">Category</label>
            <select
              name="category"
              className="mt-1 w-full border rounded-md p-2"
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
          <div className="col-span-1 md:col-span-2">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
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
