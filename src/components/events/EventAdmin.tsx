import React, { useState } from "react";

const EventAdmin = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    description: "",
    image: null,
    registrationLink: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewEvent({ ...newEvent, image: file });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", newEvent.title);
    formData.append("date", newEvent.date);
    formData.append("description", newEvent.description);
    formData.append("image", newEvent.image);
    formData.append("registrationLink", newEvent.registrationLink);

    try {
      // Example API call
      await fetch("http://your-api-url.com/events", {
        method: "POST",
        body: formData,
      });

      alert("Event added successfully!");
      setEvents([...events, { ...newEvent, id: events.length + 1 }]);
    } catch (error) {
      console.error("Error adding event:", error);
    }

    // Reset form
    setNewEvent({
      title: "",
      date: "",
      description: "",
      image: null,
      registrationLink: "",
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Event Admin</h1>

      {/* Form to Add New Event */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Add New Event</h2>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={handleFormSubmit}
        >
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium">Event Title</label>
            <input
              type="text"
              name="title"
              className="mt-1 w-full border rounded-md p-2"
              value={newEvent.title}
              onChange={handleInputChange}
              placeholder="Enter the event title"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Event Date</label>
            <input
              type="date"
              name="date"
              className="mt-1 w-full border rounded-md p-2"
              value={newEvent.date}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Registration Link</label>
            <input
              type="url"
              name="registrationLink"
              className="mt-1 w-full border rounded-md p-2"
              value={newEvent.registrationLink}
              onChange={handleInputChange}
              placeholder="Enter the registration link"
              required
            />
          </div>

          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium">Event Description</label>
            <textarea
              name="description"
              className="mt-1 w-full border rounded-md p-2 h-28"
              value={newEvent.description}
              onChange={handleInputChange}
              placeholder="Describe the event details..."
              required
            ></textarea>
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
              Add Event
            </button>
          </div>
        </form>
      </div>

      {/* Event List */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-4">Existing Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col"
            >
              <img
                src={
                  event.image instanceof File
                    ? URL.createObjectURL(event.image)
                    : event.image
                }
                alt={event.title}
                className="rounded-md mb-4 object-cover h-40"
              />
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{event.description}</p>
              <p className="text-sm text-gray-500 mb-2">
                Date: {new Date(event.date).toLocaleDateString()}
              </p>
              <a
                href={event.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline mb-4"
              >
                Registration Link
              </a>
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

export default EventAdmin;
