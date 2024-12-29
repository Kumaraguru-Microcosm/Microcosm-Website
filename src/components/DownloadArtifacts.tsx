import React from "react";
import { FaDownload } from "react-icons/fa";
// Sample Data
const artifacts = [
  {
    id: 1,
    title: "Nature Conservation Report",
    description: "An in-depth analysis of conservation efforts worldwide.",
    link: "https://example.com/nature-report.pdf",
  },
  {
    id: 2,
    title: "Sustainability Guide",
    description: "A guide to achieving sustainability in daily life.",
    link: "https://example.com/sustainability-guide.pdf",
  },
  {
    id: 3,
    title: "Wildlife Photography Tips",
    description: "Learn techniques for capturing stunning wildlife images.",
    link: "https://example.com/wildlife-tips.pdf",
  },
];

const DownloadArtifacts = () => {
  return (
    <div className="p-8 bg-blue-50 min-h-screen">
      <h1 className="md:text-3xl text-2xl font-bold text-blue-700 mb-6">
        Download Artifacts
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {artifacts.map((artifact) => (
          <div
            key={artifact.id}
            className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
          >
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-blue-800 mb-2">
                {artifact.title}
              </h2>
              <p className="text-gray-600 mb-4">{artifact.description}</p>
            </div>
            <a
              href={artifact.link}
              download
              className="flex items-center justify-center gap-2 text-blue-700 hover:text-blue-500 font-medium mt-4"
            >
              <FaDownload />
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DownloadArtifacts;
