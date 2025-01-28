import axios from "axios";

const serverUrl = import.meta.env.VITE_BACKEND_URL;

// Add a new project
export const addNewProject = async (projectDetails: FormData) => {
  try {
    const res = await axios.post(`${serverUrl}/projects/new`, projectDetails, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("Project added successfully:", res.data);
    return res.data;
  } catch (error) {
    console.error("Error adding project:", error);
    throw error;
  }
};


export const editProject = async(id,details) => {
  try {
    const res = await axios.post(`${serverUrl}/projects/edit/${id}`, details, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Project edited successfully:", res.data);
    return res.data;
  } catch (error) {
    console.error("Error adding project:", error);
    throw error;
  }
}
// Get all projects
export const getAllProjects = async () => {
  try {
    const res = await fetch(`${serverUrl}/projects/all`);
    if (!res.ok) {
      throw new Error(`Error fetching projects: ${res.statusText}`);
    }
    const projects = await res.json();
    console.log("Fetched Projects:", projects);
    return projects;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Get a project by ID
export const getProjectById = async (projectId) => {
  try {
    const res = await axios.get(`${serverUrl}/projects/${projectId}`);
    console.log("Fetched Project:", res.data);
    return res.data;
  } catch (error) {
    console.error(`Error fetching project with ID ${projectId}:`, error);
    throw error;
  }
};
