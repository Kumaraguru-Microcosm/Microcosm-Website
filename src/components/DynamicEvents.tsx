import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getAllEvents } from "../api/event";

const EventCard = ({ event, onViewDetails }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-2xl w-full sm:w-64 md:w-80 lg:w-96 flex flex-col"
    >
      {/* Image Section */}
      <motion.img
        src={event.imageUrl}
        alt={event.title}
        className="w-full h-48 sm:h-40 md:h-64 object-cover"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-gray-800">{event.title}</h3>
          <span className="text-sm text-gray-500">{event.date}</span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {event.description}
        </p>

        <button
          onClick={() => onViewDetails(event)}
          className="mt-auto text-center bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 transform hover:scale-105 text-sm"
        >
          View Details
        </button>
      </div>
    </motion.div>
  );
};

const EventDetails = ({ event, onBack }) => {
  return (
    <div className="p-8">
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 font-semibold mb-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        <span>Back</span>
      </button>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <img
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{event.title}</h2>
        <p className="text-gray-500 text-sm mb-2">{event.date}</p>
        <p className="text-gray-700 mb-6">{event.description}</p>

        {/* Register Now button with window.open */}
        {/* <button
          onClick={() => window.open(event.registrationLink, "_blank")}
          className="inline-block bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
        >
          Register Now
        </button> */}
      </motion.div>
    </div>
  );
};

const DynamicEvents = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    // Fetch events from API
    (async () => {
      const es = await getAllEvents();
      setEvents(es);
    })();

    // Adjust items per page based on window width
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(events.length / itemsPerPage);

  const handlePageClick = (index) => {
    setCurrentPage(index);
  };

  const paginatedEvents = events.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage,
  );

  return (
    <section className="min-h-screen flex flex-col justify-center items-center p-8">
      <div className="container mx-auto flex flex-col items-center">
        {selectedEvent ? (
          <EventDetails
            event={selectedEvent}
            onBack={() => setSelectedEvent(null)}
          />
        ) : (
          <>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold text-gray-800 text-center mb-12"
            >
            Events
            </motion.h2>

            <div className="flex flex-wrap justify-center gap-8">
              {paginatedEvents.map((event) => (
                <EventCard
                  key={event._id}
                  event={event}
                  onViewDetails={setSelectedEvent}
                />
              ))}
            </div>

            <div className="flex justify-center mt-6 gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageClick(index)}
                  className={`w-4 h-4 rounded-full transition-all ${currentPage === index
                      ? "bg-green-500 transform scale-125"
                      : "bg-gray-300 hover:bg-green-300"
                    }`}
                ></button>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default DynamicEvents;
