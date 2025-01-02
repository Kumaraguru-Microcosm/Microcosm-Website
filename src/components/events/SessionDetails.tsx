import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import sessionPhoto1 from "../../assets/events/birdWalkImage.png";
import sessionPhoto2 from "../../assets/events/sustainabilityImage.png";
import sessionPhoto3 from "../../assets/events/wetLandImage.png";
import Footer from "../Footer";
import Header from "../Header";
// import sessionVideo from "../../assets/events/sampleVideo.mp4";

const mediaItems = [
  { type: "video", src: "" },
  { type: "image", src: sessionPhoto1 },
  { type: "image", src: sessionPhoto2 },
  { type: "image", src: sessionPhoto3 },
];

const SessionDetails = () => {
  const { id } = useParams(); // Get session ID from the route
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? mediaItems.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === mediaItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <Header />

      {/* Top Bar with Back Button and Title in Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 py-12">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-gray-700 mb-4 hover:text-gray-900 font-semibold"
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

        {/* Spacer to push the title to the center */}
        <div className="flex-grow text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 ">
            Session Title Here
          </h1>
        </div>

        {/* Empty div to balance flexbox */}
        <div className="w-8"></div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-4 py-6">
        {/* Media Display */}
        <div className="relative">
          {mediaItems[currentIndex].type === "video" ? (
            <video
              src={mediaItems[currentIndex].src}
              controls
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          ) : (
            <img
              src={mediaItems[currentIndex].src}
              alt={`Media ${currentIndex + 1}`}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          )}

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition"
          >
            &larr;
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition"
          >
            &rarr;
          </button>
        </div>

        {/* Text Content */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mt-4">
            This is a placeholder for the session description. Update this
            content to reflect your session details for ID: {id}.
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default SessionDetails;
