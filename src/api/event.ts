import axios from "axios";
const serverUrl = import.meta.env.VITE_BACKEND_URL;
export const addNewEvent = async (eventDetails) => {
  try {
    const res = await axios.post(`${serverUrl}/events/new`, eventDetails, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res);
  } catch (error) {
    console.error(error);
  }
};

export const editEvent = async(id,details)=>{
  try {
    const res = await axios.post(`${serverUrl}/events/edit/${id}`, details, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return {...res.data,imageUrl:`http://localhost:3000/files/${res.data.image}`}
  } catch (error) {
    console.error(error);

  }
}
export const getAllEvents = async () => {
  try {
    const res = await fetch(`${serverUrl}/events/all`);
    const events = await res.json();
    return events;
  } catch (error) {
    console.error(error);
  }
};
