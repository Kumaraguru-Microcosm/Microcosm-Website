import React, { useEffect, useState } from "react";
import tobyscott from "../../assets/teams/toby-scott.png";
import murielmoore from "../../assets/teams/muriel-moore.png";
import pokbenjamin from "../../assets/teams/pok-benjamin.png";
import microsoft from "../../assets/partners/microsoftlogo.png";
import salesforce from "../../assets/partners/salesforcelogo.png";
import webmerge from "../../assets/partners/webmergelogo.png";
import kentico from "../../assets/partners/kentico.png";
import aws from "../../assets/partners/awslogo.png";
import IBM from "../../assets/partners/IBM.png";
import Dell from "../../assets/partners/Dell.png";
import Cloudera from "../../assets/partners/cloudera.png";
import Header from "../Header";
import Footer from "../Footer";

const teamMembers = [
  { name: "KEVIN BRYAN", role: "Interior Designer - Partner", image: tobyscott },
  { name: "TOBY SCOTT", role: "Architect Director - Partner", image: tobyscott },
  { name: "MURIEL MOORE", role: "Architect Manager - Partner", image: murielmoore },
  { name: "POK BENJAMIN", role: "Interior Manager - Partner", image: pokbenjamin },
];

const partners = [
  { name: "Microsoft", image: microsoft },
  { name: "Salesforce", image: salesforce },
  { name: "WebMerge", image: webmerge },
  { name: "Kentico", image: kentico },
  { name: "AWS", image: aws },
  { name: "IBM", image: IBM },
  { name: "Dell", image: Dell },
  { name: "Cloudera", image: Cloudera },
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={partner.image}
                alt={partner.name}
                className="w-full h-auto object-cover rounded-lg"
                style={{ maxHeight: "120px" }}
              />
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
