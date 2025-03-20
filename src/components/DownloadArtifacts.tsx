import React from "react";
import { FaDownload } from "react-icons/fa";
// Sample Data
const artifacts = [
  {
    id: 1,
    title: "Microcosm - Kumaraguru College of Technology",
    description: "Kumaraguru Microcosm is an eco-sensitive initiative to create a coexisting, inclusive, and sustainable environment",
    link: "https://aqar.kct.ac.in/3/2021-22/3_6_1/Microcosm.pdf",
  },
  {
    id: 2,
    title: "Distinctiveness of Kumaraguru ",
    description: "KCT has the vision set as to become a technical university of International Standards through continuous improvement",
    link: "https://kct.ac.in/wp-content/uploads/2021/12/institutional-Distinctiveness.pdf",
  },
  {
    id: 3,
    title: "KCT SSR Report",
    description: "The SSR (Self-Study Report) of Kumaraguru College of Technology (KCT) is a comprehensive document submitted as part of the accreditation process, typically for NAAC (National Assessment and Accreditation Council) or NBA (National Board of Accreditation). ",
    link: "https://www.kct.ac.in/wp-content/uploads/2022/06/SSR-.pdf",
  },
];

const DownloadArtifacts = () => {
  return (
    <div className="p-8 bg-blue-50 ">
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
