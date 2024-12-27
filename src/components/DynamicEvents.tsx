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
      className="bg-white rounded-xl shadow-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-2xl w-full sm:w-64 md:w-80 lg:w-96 flex flex-col"
    >
      {/* Image Section */}
      <motion.img
        src={image}
        alt={title}
        className="w-full h-48 sm:h-40 md:h-64 object-cover"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
          <span className="text-sm text-gray-500">{date}</span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {description}
        </p>

        <motion.a
          href={registrationLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto text-center bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition duration-300 transform hover:scale-105 text-sm"
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
      description:
        "Join the conversation about Sustainable Development Goals and their global impact.",
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
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
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
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <section className="p-8">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-gray-800 text-center mb-12"
        >
          Upcoming Events
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-8">
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

        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageClick(index)}
              className={`w-4 h-4 rounded-full transition-all ${
                currentPage === index
                  ? "bg-green-500 transform scale-125"
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
