import axios from "axios";
const serverUrl = import.meta.env.VITE_BACKEND_URL;
export const addNewBlog = async (blogDetails) => {
  try {
    const response = await fetch(`${serverUrl}/blogs/new`, {
      method: 'POST',
      body: blogDetails,
    });
  } catch (error) {
    console.error(error);
  }
};

export const getAllBlogs = async () => {
  try {
    const res = await fetch(`${serverUrl}/blogs/all`);
    const blogs = await res.json();
    console.log("fetched Blogs:", blogs);
    return blogs;
  } catch (error) {
    console.error(error);
  }
};
