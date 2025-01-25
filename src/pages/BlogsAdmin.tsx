import React, { useState } from "react";

const BlogsAdmin = () => {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({
    title: "",
    content: "",
    image: null,
    date: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBlog({ ...newBlog, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewBlog({ ...newBlog, image: file });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", newBlog.title);
    formData.append("content", newBlog.content);
    formData.append("image", newBlog.image);
    formData.append("date", newBlog.date);

    try {
      // Example API call
      await fetch("http://your-api-url.com/blogs", {
        method: "POST",
        body: formData,
      });

      alert("Blog added successfully!");
      setBlogs([...blogs, { ...newBlog, id: blogs.length + 1 }]);
    } catch (error) {
      console.error("Error adding blog:", error);
    }

    // Reset form
    setNewBlog({
      title: "",
      content: "",
      image: null,
      date: "",
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Blogs Admin</h1>

      {/* Form to Add New Blog */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Add New Blog</h2>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={handleFormSubmit}
        >
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium">Blog Title</label>
            <input
              type="text"
              name="title"
              className="mt-1 w-full border rounded-md p-2"
              value={newBlog.title}
              onChange={handleInputChange}
              placeholder="Enter the blog title"
              required
            />
          </div>

          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium">Blog Content</label>
            <textarea
              name="content"
              className="mt-1 w-full border rounded-md p-2 h-28"
              value={newBlog.content}
              onChange={handleInputChange}
              placeholder="Write the blog content..."
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium">Date</label>
            <input
              type="date"
              name="date"
              className="mt-1 w-full border rounded-md p-2"
              value={newBlog.date}
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
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Add Blog
            </button>
          </div>
        </form>
      </div>

      {/* Blog List */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-4">Existing Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col"
            >
              <img
                src={
                  blog.image instanceof File
                    ? URL.createObjectURL(blog.image)
                    : blog.image
                }
                alt={blog.title}
                className="rounded-md mb-4 object-cover h-40"
              />
              <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{blog.content}</p>
              <p className="text-sm text-gray-500 mb-4">
                Date: {new Date(blog.date).toLocaleDateString()}
              </p>
              <button className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600">
                Edit
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsAdmin;
