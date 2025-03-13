import axios from "axios";
const serverUrl = import.meta.env.VITE_BACKEND_URL;
import { events as eventsMockData } from "../static/events.json";
export const addNewEvent = async (eventDetails) => {
  try {
    const res = await axios.post(`${serverUrl}/events/new`, eventDetails, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const editEvent = async (id, details) => {
  try {
    const res = await fetch(`${serverUrl}/events/edit/${id}`, {
      method: "POST",
      body: details,
    });
    const respJson = await res.json();
    console.log("this is resp: ", respJson);
    return {
      ...respJson.data,
      imageUrl: `http://localhost:3000/files/${respJson.data.image}`,
    };
  } catch (error) {
    console.error(error);
  }
};
export const getAllEvents = async () => {
  try {
    // const res = await fetch(`${serverUrl}/events/all`);
    // const events = await res.json();
    // return events;
    return eventsMockData;
  } catch (error) {
    console.error(error);
  }
};
