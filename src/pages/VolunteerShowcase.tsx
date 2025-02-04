import { useEffect, useState } from "react";
import { getAllVolunteerApplications } from "../api/volunteer";

const VolunteerShowcase = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6); // Items per page

  useEffect(() => {
    (async () => {
      const vs = await getAllVolunteerApplications();
      const volunteersWithVerification = vs.map((volunteer) => ({
        ...volunteer,
        verified: false,
      }));
      setVolunteers(volunteersWithVerification);
    })();
  }, []);

  const toggleVerification = (id) => {
    setVolunteers((prevVolunteers) =>
      prevVolunteers.map((volunteer) =>
        volunteer._id === id
          ? { ...volunteer, verified: !volunteer.verified }
          : volunteer
      )
    );
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentVolunteers = volunteers.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(volunteers.length / itemsPerPage);

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Volunteer Applications
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {volunteers.length === 0 ? (
          <p className="col-span-full text-center text-gray-600 text-lg">
            No Volunteer Applications Found
          </p>
        ) : (
          currentVolunteers.map((volunteer) => (
            <div
              key={volunteer._id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between border border-gray-200"
            >
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  {volunteer.name}
                </h2>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Email:</span> {volunteer.email}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Phone:</span> {volunteer.phone}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Graduation Year:</span> {volunteer.graduationYear}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">College:</span> {volunteer.college}
                </p>
                <p className="text-gray-600 mb-2 truncate">
                  <span className="font-medium">Interests:</span> {volunteer.interests.join(", ")}
                </p>
                <p className="text-gray-600 line-clamp-3">
                  <span className="font-medium">Experience:</span> {volunteer.experience}
                </p>
              </div>

              {/* Verification Button */}
              <button
                onClick={() => toggleVerification(volunteer._id)}
                className={`mt-4 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  volunteer.verified
                    ? "bg-green-500 text-white hover:bg-green-600"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {volunteer.verified ? "Verified" : "Not Verified"}
              </button>
            </div>
          ))
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 w-full max-w-7xl">
          <div className="text-gray-600 text-sm">
            Showing {indexOfFirstItem + 1} - {Math.min(indexOfLastItem, volunteers.length)} of{" "}
            {volunteers.length} results
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Previous
            </button>

            <div className="sm:hidden">
              <select
                value={currentPage}
                onChange={(e) => setCurrentPage(Number(e.target.value))}
                className="px-4 py-2 bg-white border border-gray-300 rounded-md"
              >
                {Array.from({ length: totalPages }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    Page {i + 1}
                  </option>
                ))}
              </select>
            </div>

            <div className="hidden sm:flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-4 py-2 min-w-[40px] rounded-md ${
                    currentPage === i + 1
                      ? "bg-blue-600 text-white"
                      : "bg-white border border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VolunteerShowcase;
