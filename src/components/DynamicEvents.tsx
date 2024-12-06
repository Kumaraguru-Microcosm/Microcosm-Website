import React from "react";
import { motion } from "framer-motion";

// Dummy images for events (replace these with actual images related to each event)
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
      className="bg-white rounded-lg shadow-xl overflow-hidden transition-all transform hover:scale-105 hover:shadow-2xl sm:w-80 md:w-80 lg:w-96 flex flex-col"
    >
      {/* Event Image */}
      <motion.img
        src={image}
        alt={title}
        className="w-full h-64 object-cover rounded-t-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Event Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Event Title & Date */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500">{date}</p>
        </div>

        {/* Event Description */}
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>

        <hr className="border-gray-300 my-2" />

        {/* Register Button */}
        <motion.a
          href={registrationLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto text-center bg-blue-500 text-white py-2 px-4 rounded shadow-md hover:bg-blue-600 transition duration-300 transform hover:scale-105"
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
      description:
        "Explore the campus’s sustainability efforts with guided tours.",
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
      description:
        "Discover the diverse bird species on our campus during a guided walk.",
      image: birdWalkImage,
      registrationLink: "#",
    },
    {
      id: 4,
      title: "Wetland Documentation",
      date: "April 5, 2025",
      description:
        "Learn about our local wetlands and contribute to documenting their health.",
      image: wetlandImage,
      registrationLink: "#",
    },
    {
      id: 5,
      title: "Community Outreach Activities (KARE)",
      date: "May 10, 2025",
      description:
        "Participate in community outreach programs aimed at environmental awareness.",
      image: kareImage,
      registrationLink: "#",
    },
  ];

  return (
    <section className="p-8">
      <div className="container mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-gray-800 text-center mb-12"
        >
          Upcoming Events
        </motion.h2>

        {/* Events Grid */}
        <div className="flex flex-wrap justify-center gap-10">
          {events.map((event) => (
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
      </div>
    </section>
  );
};

export default DynamicEvents;
