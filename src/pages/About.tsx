import { useAtom } from "jotai";
import "./about.css";
import Navbar from "../components/common/Navbar";
import Footer from "../components/Footer";
import { navbarAtom } from "../jotai";
import { NavbarEnum } from "../data";

const About = () => {
  const [_, setNav] = useAtom(navbarAtom);
  setNav(NavbarEnum.About);
  return (
    <div className="flex flex-col justify-between h-full">
      <Navbar notHome />
      <div className="container my-20 mx-auto px-10 flex flex-col gap-5">
        <div className="vision flex flex-col gap-5 mt-5">
          <h2 className="text-4xl text-center">About Us</h2>
          <p className="text-lg">
            Kumaraguru Microcosm is an eco-sensitive initiative to make a
            coexisting, inclusive and sustainable environment for a quality life
            of the humans and all other living partners with a vision to create
            a campus ecosystem of balance and influence. Microcosm is a
            multi-year programme carrying projects of environmental
            sustainability, to create a grand eco-future. This initiative aims
            to build a sustainable ecosystem by 2030, and to continue to exhibit
            the acts of sustainability, for sustainability being omnipotent.
          </p>
        </div>
        <div className="focus-areas">
          <h2 className="text-2xl font-bold my-3">Focus Areas</h2>
          <div className="flex flex-col gap-5">
            <div className="energy flex flex-col gap-5">
              <div className="gap-5">
                <h2 className="text-xl my-2 font-bold">Energy and Emission</h2>
                <p className="font-medium">
                  The campus currently operates on 36% renewable energy, with
                  30% of this generated from solar power at a capacity of 250
                  kW. We are actively working toexpand our solar power plant and
                  procure wind energy, aiming to increase our solar capacity to
                  4 MW. This initiative will enable us to achieve nearly 60% of
                  our total energy consumption from renewable sources. Solar
                  Energy Installation of 250 kW Solar Power Station as a green
                  energy initiative. Initially 50kW solar power station was
                  installed on B-Block roof top (5000 Sq feet) and is
                  operational since October 15th, 2016. Adding to it another 200
                  kW Solar Power station has been Installed on C and E blocks
                  (20,000 Sq.feet) on 5th July 2018 and is in operation. The
                  total Investment cost accounts to 1.5 Crore. The MNRE/TEDA
                  grant of Rs.45 Lakhs is received by the EEE department, KCT.
                  The inverter in solar power station uses the advanced SVPWM
                  (Space Vector Pulse Width Modulation) technique with MLI
                  (Multi level Inverter) based configuration, which produces
                  harmonic free power generation meeting the IEEE standards
                  requirements. It also incorporates SCADA (Supervisory Control
                  and Data Acquisition System) and IOT (Internet of Things)
                  based online monitoring system which can monitor daily power
                  generation data through online and Mobile APP. The 250 KW
                  Solar Power Station uses Poly crystalline based Photo Voltaic
                  panels of 25,500 sq.ft. area installed with 763 panels (on B,
                  C, E Blocks) with GRID connectivity which can produce 34,875
                  units per month on average. Cost saving in electricity bill of
                  Approx. Rs. 2,79,000/- per month. It has resulted in
                  Kumaraguru EB bill savings of Rs. 35 Lakhs per annum
                </p>
              </div>
              <div>
                <h2 className="text-xl my-2 font-bold">
                  Wind Energy Procurement
                </h2>
                <p className="font-medium">
                  In addition to the onsite solar power station, we purchase
                  65,000 units of wind energy each month, further decreasing
                  reliance on non-renewable energy sources and reinforcing its
                  commitment to sustainable energy solutions.
                </p>
              </div>
              <div>
                {" "}
                <h2 className="text-xl font-bold">
                  Digital Power Monitoring System
                </h2>
                <p className="font-medium">
                  We utilize an advanced digital power monitoring system located
                  in Power House 1 to track and manage energy consumption
                  efficiently. This system focuses on monitoring the Academic
                  Block, offering real-time data through user-friendly software
                  dashboards. On average, 10,000 to 15,000 kVA of power is
                  consumed daily, highlighting the significance of effective
                  energy management. The system helps identify energy
                  consumption trends, enabling optimized usage and reduced
                  wastage.
                </p>
              </div>
            </div>
            <div className="waste mt-10">
              <h2 className="text-2xl font-bold mt-5 mb-2">Waste Management</h2>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <h2 className="text-xl font-bold">Resource Recovery Park</h2>
                  <ul className="list-disc px-5">
                    <li>
                      3 years since commenced, 250+ tons Resources recovered
                    </li>
                    <li> 4 steps Segregation process</li>
                    <li> Sorted into 25+ types of wastes</li>
                    <li> 300+ kgs Vegetable peels composted</li>
                    <li> 3 tons of organic manure generated</li>
                    <li> 250+ used Buckets upcycled;10% of students opted</li>
                    <li> 50+ lakh revenue generated</li>

                    <li>
                      1 MLD - MBBR Technology - Approx. 7 Lakh of used water
                      treated per day
                    </li>
                    <li>
                      100% of wastewater is recycled & reused for Landscape
                      irrigations
                    </li>
                  </ul>
                  <p>
                    Resource Recovery Park is an integrated solid waste
                    management facility of Kumaraguru Institutions. In this
                    facility, the waste generated in the campus is segregated
                    and disposed responsibly through composting, upcycling,
                    recycling, incineration and scientific land filling. Through
                    this initiative, we will also implement various policies to
                    prevent and minimize generation of waste. RRP will also be
                    used by our faculty and students to work on projects related
                    to technology in waste management and to educate students
                    and the public on solid waste management through various
                    programs. To achieve a zero-waste future by effectively
                    managing waste through Solid Waste Management systems. We
                    have successfully recovered and disposed of 76.4 tons of
                    resources in the year 2023, including 18.4 tons of scrap and
                    58 tons of common waste. Key Aspects Solid waste management
                    process in our campus are,
                  </p>
                  <ul className="list-disc px-5">
                    <li>Collection of waste</li>
                    <li>Transportation of waste</li>
                    <li>Segregation of waste</li>
                    <li>Disposal of waste</li>
                    <li>Collection of waste</li>
                    <li>Primary collection point:</li>
                  </ul>
                  <p>
                    It is the elementary level of collecting waste from the
                    individual units throughout the campus. This process is done
                    once every day throughout the campus.
                    <br />
                    <b className="font-bold mt-2 text-lg">
                      Secondary collection point:{" "}
                    </b>
                    All the trash collected in the primary collection points
                    reaches the secondary collection point. Multiple secondary
                    collection points are located at different places across the
                    campus. The wastes from here every day reach the segregation
                    yard. Transportation of waste This stage involves loading
                    and unloading the trash from the secondary collection point
                    of the campus to the segregation yard. This transportation
                    fleet involves tractor and battery-operated vehicles.
                    Segregation of waste Solid waste is categorized into:
                  </p>
                  <ul className="list-disc px-5">
                    <li>Paper and Boards (Various Forms)</li>
                    <li>Plastic (Various Forms)</li>
                    <li>E Waste</li>
                    <li>Organic Waste</li>
                    <li>Glass</li>
                    <li>Wood</li>
                    <li>Metal</li>
                    <li>Sanitary Waste</li>
                    <li>Fabrics</li>
                  </ul>
                  <h2 className="text-xl font-bold mt-3">Disposal of waste</h2>
                  <p>
                    The disposal of waste involves identifying the material and
                    processing it according to its potential. The methods of
                    disposal of waste are categorized as follows:
                  </p>
                  <ul className="list-disc px-5">
                    <li>
                      Recycle - Any material such as paper, plastic, E -waste,
                      Glass, metal that can be recovered, processed and
                      converted into a raw material for producing different
                      products are sent to local recyclers.
                    </li>
                    <li>
                      Composting - All the organic matter that is recovered from
                      the campus are composted at our compost yard using a very
                      simple method of aerobic composting.
                    </li>
                    <li>
                      Aerobic Composting requires Carbon, Nitrogen and Microbes.
                      All the dry leaf litter in our campus is used as source of
                      Carbon. All the vegetable waste are used as the source of
                      Nitrogen and the dung from native cattle that we rear in
                      our campus is used as the source of microbes in this
                      composting process.
                    </li>
                    <li>Incineration</li>
                    <li>
                      The sanitary waste generated from our hostels and places
                      across the campus is incinerated at the resource recovery
                      park.
                    </li>
                    <li>
                      This incinerator works through a four-stage
                      pollutant-filtration namely Fire Clay filter, Wet
                      scrubber, Water Spray and Carbon Filter. This ensures that
                      most of the particulate matter released from the
                      incineration is filtered to ensure minimal air pollution.
                    </li>
                  </ul>
                  <h2 className="font-bold text-lg mt-3">Upcycling Studio</h2>
                  <p>
                    Upcycling is the purpose of repurposing or reusing something
                    that you might have otherwise discarded. It can also involve
                    renovating an item you currently use; transforming it into
                    something beautiful that you can fall in love with again.
                    This might be as simple as painting an old pine wardrobe a
                    jazzy cobalt blue to match your new décor.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-bold my-2">Paper usage Policy</h2>
                  <p>
                    By reducing paper usage through digitization, we have
                    significantly contributed to environmental sustainability.
                    This initiative has not only decreased waste but also
                    conserved resources otherwise used in paper production and
                    disposal. Through the digitization of 488 project reports
                    across two phases, requiring four copies per report, we have
                    saved approximately ₹2,00,000 per semester, varying with the
                    student count each semester. This initiative has conserved
                    resources, reduced waste, and made a notable environmental
                    impact: 2880 reams of paper, 6.7 tons, and approximately 172
                    trees saved annually.
                  </p>
                </div>
                <div>
                  <h2 className="font-bold text-xl mb-2">
                    Liquid Waste Management
                  </h2>
                  <p>
                    The Sewage Treatment Plant (STP) at Kumaraguru Institutions
                    is a cornerstone of our commitment to environmental
                    sustainability and water conservation. The plant operates
                    using Moving Bed Biofilm Reactor (MBBR) Technology, a highly
                    efficient and eco-friendly wastewater treatment process
                    designed to ensure effective recycling and reuse of water.
                    Key Highlights of the STP
                  </p>
                  <ul className="list-disc px-5">
                    <li>
                      Capacity: The STP has a treatment capacity of 1 million
                      Liters per Day (1 MLD), making it suitable for managing
                      the wastewater generated across the campus efficiently.
                    </li>
                    <li>
                      Water Treated Daily: Approximately 5 lakh litres of used
                      water are treated every day through the STP, ensuring
                      sustainable management of wastewater.
                    </li>
                    <li>
                      100% Wastewater Recycling: All wastewater generated on the
                      campus is treated and recycled through the STP.
                    </li>
                    <li>
                      Reuse for Landscape Irrigation: The treated water is
                      completely reused for irrigating the extensive green
                      landscapes across the campus, reducing dependency on
                      freshwater resources.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="water mt-10">
              <h2 className="font-bold text-2xl">Water Security</h2>
              <p className="my-2">
                Become a water resilient campus by using various methods to
                harvest every drop of rainwater, recycle used water and optimize
                water usage on campus.
              </p>
              <div className="flex flex-col gap-3 my-3">
                <div>
                  <h2 className="font-bold text-xl">Aerators Installation</h2>
                  <p>
                    Optimizing water usage across the campus by enhancing its
                    wastewater treatment and management systems. This includes
                    the installation of water-saving aerators in hostels,
                    classrooms, and restrooms, which reduced the flow rate from
                    7 LPM to 2LPM. This has resulted in daily water savings of
                    approximately 30,000 liters, translating to an estimated
                    annual savings of 10.95 million liters and reducing overall
                    campus water consumption by about 5%.
                  </p>
                </div>
                <div>
                  <h2 className="font-bold text-xl">Water Metering</h2>
                  <p>
                    Smart water meters were installed in various buildings to
                    monitor water usage in real time. This system allows for the
                    detection of leaks, optimization of water usage patterns,
                    and data-driven decision-making for water management.
                  </p>
                </div>
                <div>
                  <h2 className="font-bold text-xl">Water Conservation</h2>
                  <p>
                    The water conservation measures effectively capture
                    stormwater, preventing flooding during heavy rains and
                    facilitating gradual water infiltration to improve local
                    aquifer levels. The rainwater harvesting (RWH) systems and
                    percolation ponds can capture up to 85,000 liters of water
                    per hour during moderate rainfall, with over 8.3 million
                    liters successfully harvested in a single instance last
                    monsoon season.Details about the RWH models and Percolation
                    ponds established in the campus,
                  </p>
                  <ul className="list-disc px-5">
                    <li>
                      A 6” dia tube well is drilled for a depth of 100m - 125m,
                      with casing pipe (both plain and perforated) erection.
                    </li>
                    <li>
                      A filter chamber of size 3.35m x 2m x 2m depth is
                      constructed around the tube well with a brick outer wall.
                      For roadside structures, a cover slab of 200mm thickness
                      is placed with filter media.
                    </li>
                    <li>
                      The filter chamber is filled with random rubble soling for
                      1.25m height and 40mm metal for 0.5m height.
                    </li>
                    <li>
                      The perforated pipe is provided with an end cap on top and
                      the filter bed is covered with green net and grill cover
                      for open space structure to avoid the clogging of the
                      filter bed.
                    </li>
                    <li>
                      The perimeter of the filter bed is provided with a brick
                      border and the surrounding areas will be channelized for
                      the rainwater to flow into the RWH structure.
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="font-bold text-xl">Percolation Pond</h2>
                  <p>
                    Two percolation ponds were constructed to capture stormwater
                    runoff from roads and paved areas. The ponds, strategically
                    located behind the STP and Boys' Hostel, have a combined
                    capacity of 8.3 million liters. The design was optimized
                    based on the natural drainage patterns of the campus
                    terrain. One percolation pond was created by student
                    volunteers in our campus on 2nd October 2019 which got
                    filled up with good monsoon rains.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 biodiversity">
              <h2 className="text-2xl font-bold mb-2">
                Biodiversity Enrichment
              </h2>
              <p>
                Kumaraguru campus home to 4000+ Trees, 95+ species of birds and
                55+ Species of butterflies.
              </p>
              <div className="flex flex-col gap-5 my-2">
                <div>
                  <h2 className="text-xl font-bold">Native Tree Nursery</h2>
                  <p>
                    Native seedlings are nurtured on campus in collaboration
                    with Arulagam NGO and are planted across the state as part
                    of our afforestation efforts. We use hardening technique for
                    seedlings growth, ensuring that they are resilient and
                    require minimal care after planting, as no pesticides or
                    insecticides are used. Since it’s Commencement, we have
                    nearly sent 89,406 saplings for plantation.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold">Ahimsa Vanam</h2>
                  <p>
                    A one-acre urban forest was created to promote biodiversity,
                    featuring 150 species of trees, shrubs, and plants. A
                    cobbled trail facilitates nature exploration and engagement.
                    It is a multi-layered canopy that includes mature trees,
                    fruiting dwarf trees, shrubs, perennial herbs, and vines,
                    creating a thriving natural forest ecosystem that enriches
                    soil and supports diverse wildlife. Once it matures it can
                    sequester upto 10,000 kg of carbon annually also
                    contributing to a vibrant habitat for fauna.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-bold">Afforestation Efforts</h2>
                  <p>
                    Tree Plantation at Chinnavedampatti Lake In collaboration
                    with Kousika Neerkarangal and over 50 student volunteers,
                    300+ saplings were planted along the lake's northern side,
                    with sapling care aligned with the monsoon pattern.
                    Chinnavedampatti Lake's green cover restoration will lead to
                    biodiversity enrichment, soil stability, and water
                    retention, along with increased community participation in
                    conservation efforts.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-bold">Honey Hives</h2>
                  <p>
                    Ten honey hives were installed across the campus to promote
                    pollination and raise awareness about the critical role of
                    pollinators in urban ecosystems. The initiative yields
                    around 20 liters of honey annually, demonstrating successful
                    pollinator support.
                  </p>
                </div>
              </div>
            </div>
            <div className="education">
              <p className="font-bold text-2xl mt-10">
                Student Stewardship Programs
              </p>
              <div>
                <div>
                  <h2 className="font-bold text-xl my-2">
                    Sustainable Education for school children
                  </h2>
                  <p>
                    Campus Sustainability Tours, A detailed tour to explore the
                    sustainability initiatives Kumaraguru Institutions. Through
                    this we have reached almost 40+ schools andimpacting over
                    2,000 students across the nation, we brought sustainability
                    education to classrooms and communities. Hands-on activities
                    like nature walks, biodiversity studies, and interactive
                    sessions deepen their understanding of ecosystems and
                    conservation. Association for Tropical Biology and
                    Conservation 2023, Jungle Tales: Inspiring Young Minds about
                    Tropical Biology, a session brought together 30+ schools
                    across Coimbatore throwing light on conservation and
                    tropical biology at global perspective. Y20 Talks on Climate
                    Action, 200+ students from 15 different schools and colleges
                    across Coimbatore participating in talk on Climate Action by
                    Erik Solheim (Former Minister of Climate and the Environment
                    of Norway) National Green Corps Climate Literacy Camp,
                    Partnering with the Tamil Nadu National Green Corps we
                    hosted 60+ children from 10+ government schools for a
                    transformative 3-day Climate Literacy and Awareness Camp.
                    Nurture Nature Camp with Siruthuli, In collaboration with
                    Siruthuli's 16th Annual Nurture Nature Camp, we welcomed
                    100+ enthusiastic students from 19 schools across
                    Coimbatore. Summer Biodiversity Camp, With Kousika
                    Neerkarangal NGO, Over 30 school children were invited to
                    discover the rich biodiversity of our campus, including
                    serene trail walks through "Ahimsa Vanam." YI - Thalir 2024
                    Sustainability Zone, as part of the YI - Thalir event, we
                    organized Sustainability Zone, showcasing campus initiatives
                    to over 600 students from 25+ schools, participated in 25
                    guided walks, exploring sustainability practices across our
                    campus. Kalingarayan Canal Walk, with the support of Uzhavan
                    Foundation, Young Indians, Tamil Nadu School Education,
                    through Neerum Naamum emphasizing the Water conservation
                    efforts of Kaligarayar, History of Canal, Irrigation and
                    importance regular water conservation, awareness campaigns
                    for School children across the region of Coimbatore and
                    Erode.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
