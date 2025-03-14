import axios from "axios";
import { blogs as blogstaticData } from "../static/blogs.json";
const serverUrl = import.meta.env.VITE_BACKEND_URL;
export const addNewBlog = async (blogDetails) => {
  try {
    const response = await fetch(`${serverUrl}/blogs/new`, {
      method: "POST",
      body: blogDetails,
    });
    const respJson = await response.json();
    return respJson;
  } catch (error) {
    console.error(error);
  }
};

export const getAllBlogs = async () => {
  try {
    // const res = await fetch(`${serverUrl}/blogs/all`);
    // const blogs = await res.json();
    // console.log("fetched Blogs:", blogs);
    // return blogs;
    console.log("Fetched Blogs:", blogstaticData);

    return blogstaticData;
  } catch (error) {
    console.error(error);
  }
};
export const editBlog = async (id, blogDetails) => {
  try {
    const res = await fetch(`${serverUrl}/blogs/edit/${id}`, {
      method: "POST",
      body: blogDetails,
    });
    const respJson = await res.json();
    console.log("blog updated successfully:", respJson);
    return respJson;
  } catch (error) {
    console.error(error);
  }
};
