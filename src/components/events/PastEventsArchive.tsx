import React from 'react';
import pastEventImage1 from "../../assets/events/birdWalkImage.png";
import pastEventImage2 from "../../assets/events/sdgConversationImage.png";
import pastEventImage3 from "../../assets/events/wetLandImage.png";

// Sample past events data (this can be dynamic based on annual reports)
const pastEvents = [
  {
    id: 1,
    title: "Sustainability Conference 2024",
    date: "2024-03-15",
    description: "A conference focused on sustainability efforts and innovations in green technologies.",
    media: [pastEventImage1, pastEventImage2],
    recordedSession: "https://linktorecordedvideo.com/sustainability-conference-2024",
  },
  {
    id: 2,
    title: "SDG Awareness Campaign 2023",
    date: "2023-09-10",
    description: "An event focused on raising awareness about the Sustainable Development Goals (SDGs).",
    media: [pastEventImage3],
    recordedSession: "https://linktorecordedvideo.com/sdg-awareness-campaign-2023",
  },
  {
    id: 3,
    title: "Birdwatching at Campus Wetlands",
    date: "2023-11-05",
    description: "An educational birdwatching session to explore campus wetlands and their diverse wildlife.",
    media: [pastEventImage2, pastEventImage1],
    recordedSession: "",
  },
];

const PastEventsArchive = () => {
  return (
    <div className="bg-gray-50 p-8 mt-12">
      <h2 className="text-3xl font-semibold text-green-800 mb-8 text-center">Past Events Archive</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pastEvents.map((event) => (
          <div key={event.id} className="bg-white shadow-lg rounded-lg p-6 border border-gray-300">
            <h3 className="text-xl font-bold text-green-700 mb-4">{event.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{event.description}</p>
            <div className="grid grid-cols-1 gap-4 mb-4">
              {/* Media Gallery */}
              <div className="flex flex-wrap gap-2 justify-center">
                {event.media.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Event Image ${index + 1}`}
                    className="w-full sm:w-1/2 lg:w-1/3 h-32 object-cover rounded-md"
                  />
                ))}
              </div>
            </div>

            {/* Recorded Session (if available) */}
            {event.recordedSession ? (
              <div className="text-center mt-4">
                <a
                  href={event.recordedSession}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-lg hover:bg-green-700 transition duration-300 inline-block"
                >
                  Watch Recorded Session
                </a>
              </div>
            ) : (
              <p className="text-sm text-gray-600 text-center mt-4">No recorded session available.</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastEventsArchive;
