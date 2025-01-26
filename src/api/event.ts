import axios from "axios";
const serverUrl = import.meta.env.VITE_BACKEND_URL;
export const addNewEvent = async (eventDetails) => {
  try {
    const res = await axios.post(`${serverUrl}/events/new`, eventDetails, {});
    console.log(res);
  } catch (error) {
    console.error(error);
  }
};

export const getAllEvents = async () => {
  try {
    const res = await fetch(`${serverUrl}/events/all`);
    const events = await res.json();
    return events;
  } catch (error) {
    console.error(error);
  }
};
