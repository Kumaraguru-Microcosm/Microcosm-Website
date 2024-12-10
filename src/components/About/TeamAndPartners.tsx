import React, { useState, useRef, useEffect } from "react";

const teamAndPartners = [
  {
    type: "Team",
    front: {
      image: "/path/to/team-member1.jpg",
      name: "John Doe",
      role: "Lead Strategist",
    },
    back: {
      content:
        "John brings over a decade of expertise in sustainability and innovation to lead impactful strategies.",
    },
  },
  {
    type: "Partner",
    front: {
      image: "/path/to/partner-logo1.png",
      name: "Arulagam",
      role: "Biodiversity Partner",
    },
    back: {
      content:
        "Collaborating to restore biodiversity and promote eco-friendly projects for a greener future.",
    },
  },
  {
    type: "Team",
    front: {
      image: "/path/to/team-member2.jpg",
      name: "Jane Smith",
      role: "Environmental Scientist",
    },
    back: {
      content:
        "Jane is dedicated to innovative environmental solutions, focusing on renewable energy and waste management.",
    },
  },
  {
    type: "Partner",
    front: {
      image: "/path/to/partner-logo2.png",
      name: "Green Earth Co.",
      role: "Sustainability Partner",
    },
    back: {
      content:
        "A global partner in sustainable practices, aiding communities in adopting eco-conscious solutions.",
    },
  },
  {
    type: "Highlight",
    front: {
      image: "/path/to/highlight-image.jpg",
      name: "Microcosm Initiative",
      role: "Featured Project",
    },
    back: {
      content:
        "The Microcosm Initiative pioneers efforts to create a sustainable future through education and collaboration.",
    },
  },
];

const AccordionCard = ({ item, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleToggle = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`relative p-4 rounded-lg shadow-lg transform transition-transform duration-500 ${
        index % 2 === 0 ? "bg-green-100" : "bg-blue-100"
      } hover:scale-105`}
    >
      <div
        className={`cursor-pointer ${
          isFlipped ? "hidden" : "flex"
        } items-center`}
        onClick={handleToggle}
      >
        <img
          src={item.front.image}
          alt={item.front.name}
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {item.front.name}
          </h3>
          <p className="text-sm text-gray-600">{item.front.role}</p>
        </div>
      </div>
      {isFlipped && (
        <div
          className="text-center"
          onClick={handleToggle}
        >
          <p className="text-gray-700">{item.back.content}</p>
          <button
            className="mt-4 px-4 py-2 rounded bg-gray-700 text-gray-200 hover:bg-green-700"
          >
            Know More
          </button>
        </div>
      )}
    </div>
  );
};

const TeamAndPartners = () => {
  return (
    <section className="px-6 py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Team and Partners
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {teamAndPartners.map((card, index) => (
          <AccordionCard key={index} item={card} index={index} />
        ))}
      </div>
    </section>
  );
};

export default TeamAndPartners;
