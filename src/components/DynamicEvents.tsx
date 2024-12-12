import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import sustainabilityImage from "../assets/f1.png";
import sdgConversationImage from "../assets/f1.png";
import birdWalkImage from "../assets/f1.png";
import wetlandImage from "../assets/f1.png";
import kareImage from "../assets/f1.png";

const EventCard = ({ image, title, date, description, registrationLink }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-xl overflow-hidden transition-all transform hover:scale-105 hover:shadow-2xl w-full sm:w-64 md:w-80 lg:w-96 flex flex-col"
    >
      <motion.img
        src={image}
        alt={title}
        className="w-full h-48 sm:h-40 md:h-64 object-cover rounded-t-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      <div className="p-4 sm:p-3 md:p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-2 sm:mb-3">
          <h3 className="text-lg sm:text-base md:text-2xl font-semibold text-gray-800">
            {title}
          </h3>
          <p className="text-sm text-gray-500">{date}</p>
        </div>

        <p className="text-gray-600 text-sm sm:text-xs md:text-base mb-2 sm:mb-3 flex-grow">
          {description}
        </p>

        <hr className="border-gray-300 my-2" />

        <motion.a
          href={registrationLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto text-center bg-green-500 text-white py-2 px-4 rounded shadow-md hover:bg-green-600 transition duration-300 transform hover:scale-105 text-sm sm:text-xs md:text-base"
        >
          Register Now
        </motion.a>
      </div>
    </motion.div>
  );
};

const DynamicEvents = () => {
  const events = [
    {
      id: 1,
      title: "Campus Sustainability Tours",
      date: "January 15, 2025",
      description: "Explore the campus’s sustainability efforts with guided tours.",
      image: sustainabilityImage,
      registrationLink: "#",
    },
    {
      id: 2,
      title: "SDG Conversation Series",
      date: "February 20, 2025",
      description: "Join the conversation about Sustainable Development Goals and their global impact.",
      image: sdgConversationImage,
      registrationLink: "#",
    },
    {
      id: 3,
      title: "Bird Walks",
      date: "March 12, 2025",
      description: "Discover the diverse bird species on our campus during a guided walk.",
      image: birdWalkImage,
      registrationLink: "#",
    },
    {
      id: 4,
      title: "Wetland Documentation",
      date: "April 5, 2025",
      description: "Learn about our local wetlands and contribute to documenting their health.",
      image: wetlandImage,
      registrationLink: "#",
    },
    {
      id: 5,
      title: "Community Outreach Activities (KARE)",
      date: "May 10, 2025",
      description: "Participate in community outreach programs aimed at environmental awareness.",
      image: kareImage,
      registrationLink: "#",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [transitionDuration, setTransitionDuration] = useState(5000);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
        setTransitionDuration(7000); // Longer transition for smaller screens
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
        setTransitionDuration(5000);
      } else {
        setItemsPerPage(5);
        setTransitionDuration(5000);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % Math.ceil(events.length / itemsPerPage));
    }, transitionDuration);

    return () => clearInterval(interval);
  }, [itemsPerPage, events.length, transitionDuration]);

  const paginatedEvents = events.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  const totalPages = Math.ceil(events.length / itemsPerPage);

  const handlePageClick = (index) => {
    setCurrentPage(index);
  };

  return (
    <section className="p-8">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-gray-800 text-center mb-12"
        >
          Upcoming Events
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-10">
          {paginatedEvents.map((event) => (
            <EventCard
              key={event.id}
              image={event.image}
              title={event.title}
              date={event.date}
              description={event.description}
              registrationLink={event.registrationLink}
            />
          ))}
        </div>

        <div className="flex justify-center items-center mt-8 gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentPage === index
                  ? "bg-green-500 scale-125"
                  : "bg-gray-300 hover:bg-green-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DynamicEvents;
