import React from "react";
import { useNavigate } from "react-router-dom";
import pastEventImage1 from "../../assets/events/sustainabilityImage.png";
import pastEventImage2 from "../../assets/events/sdgConversationImage.png";
import pastEventImage3 from "../../assets/events/wetLandImage.png";

const pastEvents = [
  {
    id: 1,
    title: "Sustainability Conference 2024",
    date: "2024-03-15",
    description:
      "A conference focused on sustainability efforts and innovations in green technologies.",
    media: pastEventImage1,
  },
  {
    id: 2,
    title: "SDG Awareness Campaign 2023",
    date: "2023-09-10",
    description:
      "An event focused on raising awareness about the Sustainable Development Goals (SDGs).",
    media: pastEventImage2,
  },
  {
    id: 3,
    title: "Birdwatching at Campus Wetlands",
    date: "2023-11-05",
    description:
      "An educational birdwatching session to explore campus wetlands and their diverse wildlife.",
    media: pastEventImage3,
  },
];

const PastEventsArchive = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Past Events Archive
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={event.media}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-600">{event.date}</p>
                <p className="text-gray-700 mt-2">{event.description}</p>
                {/* Recorded Session Button */}
                <button
                  onClick={() => navigate(`/sessionDetails/${event.id}`)}
                  className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-600 transition"
                >
                  Recorded Session
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PastEventsArchive;
