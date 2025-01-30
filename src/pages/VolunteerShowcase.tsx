import { useEffect, useState } from "react";
import { getAllVolunteerApplications } from "../api/volunteer";

const VolunteerShowcase = () => {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    (async () => {
      const vs = await getAllVolunteerApplications();
      setVolunteers(vs);
      console.log(vs);
    })();
  }, []);
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Volunteer Applications
      </h1>
      <div className="space-y-6">
        {volunteers.length === 0 ? (
          <p>No Volunteer Applications</p>
        ) : (
          <>
            {volunteers.map((volunteer) => (
              <div
                key={volunteer._id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h2 className="text-xl font-semibold mb-2">{volunteer.name}</h2>
                <p className="text-gray-600 mb-1">
                  <span className="font-medium">Email:</span> {volunteer.email}
                </p>
                <p className="text-gray-600 mb-1">
                  <span className="font-medium">Phone:</span> {volunteer.phone}
                </p>
                <p className="text-gray-600 mb-1">
                  <span className="font-medium">Interests:</span>{" "}
                  {volunteer.interests.join(", ")}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Experience:</span>{" "}
                  {volunteer.experience}
                </p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default VolunteerShowcase;
