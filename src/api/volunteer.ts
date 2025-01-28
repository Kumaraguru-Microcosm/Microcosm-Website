import axios from "axios";

const serverUrl = import.meta.env.VITE_BACKEND_URL;

export const addNewVolunteer = async (volunteerDetails: FormData) => {
   for(const [key,val] of volunteerDetails.entries()){
          console.log(key,val)
        }
  
    try {
      const res = await axios.post(`${serverUrl}/volunteers/new`, volunteerDetails, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Volunteer added successfully:", res.data);
      return res.data;
    } catch (error) {
      console.error("Error adding volunteer:", error);
      throw error;
    }
  };

export const getAllVolunteerApplications = async () => {
  try {
    const res = await axios.get(`${serverUrl}/volunteers/applications`)
    console.log(res.data)
    return res.data
    
  } catch (error) {
    
  }
}