import React, { useEffect, useState } from "react";
import saravanan from "../../assets/teams/saravanan.png";
import vaishnavee from "../../assets/teams/vaishnavee.png";
import nethaji from "../../assets/teams/nethaji.png";
import keerthana from "../../assets/teams/keerthana.png";
import arulagam from "../../assets/partners/Arulagam.jpeg";
import cns from "../../assets/partners/CNS.jpeg";
import env from "../../assets/partners/envDefF.svg";
import neera from "../../assets/partners/neera.png";
import tnbs from "../../assets/partners/TNBS.jpeg";
import Header from "../Header";
import Footer from "../Footer";

const teamMembers = [
  { name: "Mr. Saravanan Chandrasekaran", role: "Assistant Vice President , Kumaraguru Institutions", image: saravanan },
  { name: "Mrs. Vaishnavee K B", role: "Program Manager , Microcosm", image: vaishnavee },
  { name: "Mr. Nethaji Subash M", role: "Senior Executive, Microcosm", image: nethaji },
  { name: "Ms. Keerthana N", role: "Junior Research Fellow, Microcosm", image: keerthana },
];

const partners = [
  { name: "Environmental Defense Fund", image: env },
  { name: "Coimbatore Nature Society", image: cns },
  { name: "Tamil Nadu Butterfly Society", image: tnbs },
  { name: "Arulagam", image: arulagam },
  { name: "Kousika Neerkarangal", image: neera },
];

const TeamAndPartners = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById("team-partners-section");
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (section) observer.observe(section);
    return () => section && observer.unobserve(section);
  }, []);

  return (
    <>
    <Header />
    <div id="team-partners-section" className="py-12 overflow-hidden mt-8">
      {/* Meet Our Team Section */}
      <section
        className={`mb-16 transition-transform duration-1000 ease-in-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Meet Our Team</h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Our team consists of experienced architects who develop the projects starting with a sketch and following it up to complete implementation of intended ideas.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 mx-auto rounded-full object-cover mb-4 shadow-lg"
              />
              <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Partners Section */}
<section
  className={`transition-transform duration-1000 ease-in-out ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`}
>
  <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Partners</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
    {partners.map((partner, index) => (
      <div key={index} className="flex flex-col items-center text-center">
        <img
          src={partner.image}
          alt={partner.name}
          className="w-24 h-24 object-contain rounded-lg shadow-md"
        />
        <p className="text-sm text-gray-700 mt-2 font-medium">{partner.name}</p>
      </div>
    ))}
  </div>
</section>

    </div>
    <Footer />
    </>
  );
};

export default TeamAndPartners;
