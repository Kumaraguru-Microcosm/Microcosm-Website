import ahimsavanam from "./assets/ahimsavanam.png";
import resourceRecoveryPark from "./assets/resourceRecoveryPark.png";
import waterConservation from "./assets/waterConservation.png";

export enum NavbarEnum {
  Home = "Home",
  About = "About Us",
  Projects = "Projects",
  Events = "Events",
  GetInvolved = "Get Involved",
  Resources = "Resources",
  Contact = "Contact Us",
}

export const projects = [
  {
    id: 1,
    image: resourceRecoveryPark,
    title: "Resource Recovery Park",
    theme: "Water Security",
    date: "13 Jan 2024",
    description:
      "Integrated waste management with 250+ tons of resources recovered.",
  },
  {
    id: 2,
    image: ahimsavanam,
    title: "Ahimsa Vanam",
    theme: "Waste Management",
    date: "13 May 2024",
    description:
      "A one-acre urban forest fostering biodiversity with 150+ species of flora.",
  },
  {
    id: 3,
    image: "/path-to-image/project3.jpg",
    title: "Energy Initiatives",
    theme: "Sustainibility Education",
    date: "15 Jan 2024",
    description:
      "250kW solar power capacity, saving ₹35 lakhs annually in electricity.",
  },
  {
    id: 4,
    image: waterConservation,
    title: "Water Conservation",
    theme: "Biodiversity",
    date: "13 Apr 2024",
    description:
      "Rainwater harvesting and recycling through a 1 MLD sewage treatment plant.",
  },
];
