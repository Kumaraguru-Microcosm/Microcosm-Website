import { useEffect, useState } from "react";
import {
  deleteIntern,
  getAllInternshipApplications,
  getFilterInterns,
} from "../api/volunteer";

const AdminInternship = () => {
  const [interns, setInterns] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  useEffect(() => {
    (async () => {
      const vs = await getAllInternshipApplications();
      const internsWithVerification = vs.map((intern) => ({
        ...intern,
        verified: false,
      }));
      console.log(internsWithVerification);
      setInterns(internsWithVerification);
    })();
  }, []);

  const toggleVerification = (id) => {
    setInterns((prevInterns) =>
      prevInterns.map((intern) =>
        intern._id === id ? { ...intern, verified: !intern.verified } : intern,
      ),
    );
  };

  const exportToCSV = () => {
    const headers = [
      "Name",
      "Email",
      "Phone",
      "Interests",
      "SOP",
      "Resume URL",
      "Verified",
    ];
    const rows = interns.map((intern) => [
      ` "${intern.name}"`,
      `"${intern.email}"`,
      `"${intern.phone}"`,
      `"${intern.interests.join(";")}"`,
      `"${intern.sop}"`,
      `"${intern.resumeUrl}"`,
      `"${intern.verified ? "Yes" : "No"}"`,
    ]);
    const csvContent = [headers, ...rows].map((e) => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    if (fromDate !== "") {
      a.download = `internship_applications_${fromDate}_${toDate}.csv`;
    } else {
      a.download = `internship_applications.csv`;
    }
    a.click();
    URL.revokeObjectURL(url);
  };

  const totalPages = Math.ceil(interns.length / itemsPerPage);
  const currentInterns = interns.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800">
          Internship Applications
        </h1>
        <label htmlFor="fromDate">from</label>
        <input
          type="date"
          className="p-1"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
        />

        <label htmlFor="toDate">to</label>
        <input
          type="date"
          className="p-1"
          value={toDate}
          onChange={async (e) => {
            setToDate(e.target.value);
            const filteredDates = await getFilterInterns(
              fromDate,
              e.target.value,
            );
            console.log(filteredDates);
            setInterns(filteredDates);
          }}
        />
        <button
          onClick={exportToCSV}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Export to CSV
        </button>
      </div>
      <div className="flex flex-col w-full">
        {interns.length === 0 ? (
          <p className="text-gray-600 text-lg">
            No Internship Applications Found
          </p>
        ) : (
          currentInterns.map((intern) => (
            <div
              key={intern._id}
              className="bg-white p-6 w-full border-b border-gray-300"
            >
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  {intern.name}
                </h2>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Email:</span> {intern.email}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Phone:</span> {intern.phone}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Interests:</span>{" "}
                  {intern.interests.join(", ")}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">SOP:</span> {intern.sop}
                </p>
                <a
                  href={intern.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                  download
                >
                  View Resume
                </a>
              </div>
              <div className="flex justify-between">
                <button
                  onClick={() => toggleVerification(intern._id)}
                  className={`mt-4 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    intern.verified
                      ? "bg-green-500 text-white hover:bg-green-600"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {intern.verified ? "Verified" : "Not Verified"}
                </button>
                <button
                  className="bg-red-500 rounded-md text-white px-3 py-2 self-end"
                  onClick={async () => {
                    const response = confirm(
                      `Are you sure want to delete this  internship application of ${intern.name}?`,
                    );
                    if (response) {
                      const res = await deleteIntern(intern._id);
                      if (res?.status === 204) {
                        setInterns((prev) =>
                          prev.filter((i) => i._id !== intern._id),
                        );
                      }
                    }
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      {totalPages > 1 && (
        <div className="mt-6 flex justify-center space-x-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-md ${
                currentPage === i + 1
                  ? "bg-blue-600 text-white"
                  : "bg-white border border-gray-300 hover:bg-gray-50"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminInternship;
