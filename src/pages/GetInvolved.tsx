import Footer from "../components/Footer";
import Header from "../components/Header";
import StudentStewardship from "../components/StudentStewardship";
import VolunteerAdmin from "../components/VolunteerAdmin";

const GetInvolved = () => {
  const opportunities = [
    {
      title: "Community Outreach",
      description:
        "Assist in organizing and participating in community outreach events to spread awareness.",
    },
    {
      title: "Event Coordination",
      description:
        "Help with planning, setting up, and managing our events and workshops.",
    },
    {
      title: "Administrative Support",
      description:
        "Provide assistance with data entry, email communication, and other admin tasks.",
    },
  ];
  return (
    <>
      <Header />
      <div className="bg-gray-50 flex flex-col items-center py-10 px-6 mt-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Get Involved</h1>
        <p className="md:text-lg text-gray-600 mb-10 text-center max-w-3xl">
          Join us in making a difference! Explore the various volunteer roles
          available and become an essential part of our mission.
        </p>
        <div className="grid gap-8 w-full max-w-4xl">
          {opportunities.map((opportunity, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="md:text-2xl text-xl font-semibold text-gray-800 mb-2">
                {opportunity.title}
              </h2>
              <p className="text-gray-600 mb-4">{opportunity.description}</p>
              <button className="px-4 py-2 bg-green-500 text-white rounded-md text-sm transition-colors ">
                Apply
              </button>
            </div>
          ))}
        </div>
      </div>
        <VolunteerAdmin  />
      <div className="flex justify-center items-center">
        <StudentStewardship />
      </div>
      <Footer />
    </>
  );
};

export default GetInvolved;
