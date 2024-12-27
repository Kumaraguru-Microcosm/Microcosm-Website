import energyImage from "../../assets/about/EneryMangement.png";
import waterImage from "../../assets/waterConservation.png";
import wasteImage from "../../assets/about/wasteMangement.png";
import dairyImage from "../../assets/about/dairyImage.png";
import sustainableImage from "../../assets/about/sustainableImage.png";
import biodiversityImage from "../../assets/about/biodiversityMangement.png";

export const ongoingProjects = [
  {
    id: 1,
    title: "Energy and Emission",
    image: energyImage,
    description: "Our campus embraces renewable energy with a commitment to reduce carbon emissions.",
    overview: "Our campus embraces renewable energy with a commitment to reduce carbon emissions by utilizing solar and wind energy. By 2030, we aim to generate 60% of our energy from renewable sources.",
    keyHighlights: [
      "Solar Energy: 250kW solar power station generating 34,875 units monthly, reducing \u20b935 lakhs in annual electricity bills.",
      "Wind Energy Procurement: 65,000 units purchased monthly to complement solar energy.",
      "Digital Power Monitoring System: Tracks and optimizes energy use with real-time data insights."
    ],
    impactMetrics: {
      renewableEnergyContribution: "36%",
      monthlySavings: "\u20b92.79 lakhs",
      advancedMonitoring: "SCADA-enabled advanced monitoring system"
    },
    volunteerOpportunities: [
      "Assist in energy monitoring.",
      "Conduct workshops on renewable energy systems.",
      "Participate in green energy audits."
    ]
  },
  {
    id: 2,
    title: "Waste Management",
    image: wasteImage,
    description: "Microcosm’s Resource Recovery Park (RRP) drives a zero-waste future.",
    overview: "Microcosm’s Resource Recovery Park (RRP) drives a zero-waste future by segregating, composting, and upcycling campus waste.",
    keyHighlights: [
      "Resource Recovery Park: 250+ tons of resources recovered annually, 25+ waste types segregated, revenue generation: \u20b950+ lakhs.",
      "Sewage Treatment Plant: Recycles 1 million liters daily for landscape irrigation.",
      "Upcycling Studio: Repurposes discarded materials into usable items."
    ],
    impactMetrics: {
      organicManure: "3 tons produced annually.",
      dailyCompostedWaste: "300+ kgs of vegetable waste.",
      studentEngagement: "10% of students engaged in upcycling initiatives."
    },
    volunteerOpportunities: [
      "Participate in waste audits.",
      "Join upcycling workshops.",
      "Lead awareness campaigns for sustainable practices."
    ]
  }
];

export const completedProjects = [
  {
    id: 3,
    title: "Water Conservation",
    image: waterImage,
    description: "Water resilience is at the core of Microcosm’s sustainability goals.",
    overview: "Water resilience is at the core of Microcosm’s sustainability goals. We optimize water usage through rainwater harvesting, aerators, and smart water meters.",
    keyHighlights: [
      "Rainwater Harvesting: Captures 8.3 million liters annually through percolation ponds and recharge wells.",
      "Aerators Installation: Saves 30,000 liters daily by reducing water flow rates in restrooms and hostels.",
      "Sewage Treatment Plant: Treats 1 million liters daily with MBBR technology, recycling 100% for irrigation."
    ],
    impactMetrics: {
      annualWaterSaved: "10.95 million liters.",
      dailyTreatment: "7 lakh liters treated through STP."
    },
    volunteerOpportunities: [
      "Join efforts in monitoring water systems.",
      "Design innovative water conservation models."
    ]
  },
  {
    id: 4,
    title: "Biodiversity Enrichment",
    image: biodiversityImage,
    description: "Microcosm nurtures biodiversity through tree plantations and urban forests.",
    overview: "Microcosm nurtures biodiversity through tree plantations and urban forests.",
    keyHighlights: [
      "Ahimsa Vanam: A one-acre forest with 150 native species that sequesters 10,000 kg of carbon annually.",
      "Native Tree Nursery: 89,406 saplings distributed for afforestation efforts.",
      "Honey Hives: Promotes pollination, producing 20 liters of honey annually."
    ],
    impactMetrics: {
      treeCount: "4000+ trees on campus.",
      biodiversity: "95+ bird species, 55+ butterfly species.",
      saplingPlantation: "300+ saplings planted at Chinnavedampatti Lake."
    },
    volunteerOpportunities: [
      "Engage in biodiversity surveys.",
      "Participate in tree plantation initiatives."
    ]
  }
];

export const featuredProjects = [
  {
    id: 5,
    title: "Dairy Entrepreneurship",
    image: dairyImage,
    description: "Microcosm’s Climate-Smart Dairy initiative empowers dairy entrepreneurs.",
    overview: "Microcosm’s Climate-Smart Dairy initiative empowers dairy entrepreneurs through education, funding, and technological innovation.",
    keyHighlights: [
      "$4 lakh grant for developing sustainable dairy practices.",
      "Support for 100+ entrepreneurs, impacting 10,000+ farmers.",
      "Partnerships with 10+ stakeholders to optimize cattle health and milk production."
    ],
    impactMetrics: {
      improvedCattle: "1,00,000+ cattle and buffaloes improved.",
      householdSurveys: "300+ household surveys conducted."
    },
    volunteerOpportunities: []
  },
  {
    id: 6,
    title: "Sustainability Education",
    image: sustainableImage,
    description: "We cultivate future leaders through sustainability workshops and campus tours.",
    overview: "We cultivate future leaders through sustainability workshops, campus tours, and hands-on projects.",
    keyHighlights: [
      "Y20 Climate Talks: 200+ students engaged in global climate discussions.",
      "National Green Corps Literacy Camp: 60+ students trained in climate literacy.",
      "Campus Sustainability Tours: Impacted 2000+ students from 40+ schools."
    ],
    impactMetrics: {
      eventsConducted: "100+ events conducted annually.",
      schoolParticipation: "25+ schools participated in guided campus walks."
    },
    volunteerOpportunities: [
      "Lead sustainability tours.",
      "Mentor students on eco-friendly practices."
    ]
  }
];
