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
        <VolunteerAdmin  />
      <div className="flex justify-center items-center">
        <StudentStewardship />
      </div>
      <Footer />
    </>
  );
};

export default GetInvolved;
