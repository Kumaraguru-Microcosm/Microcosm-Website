import React, { useState } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  isSameDay,
} from "date-fns";

import sustainabilityImage from "../../assets/events/sustainabilityImage.png";
import sdgConversationImage from "../../assets/events/sdgConversationImage.png";
import birdWalkImage from "../../assets/events/birdWalkImage.png";
import wetlandImage from "../../assets/events/wetLandImage.png";
const kareImage = "/path/to/kareImage.jpg";

const events = [
  {
    id: 1,
    title: "Campus Sustainability Tours",
    date: "2025-01-15",
    description: "Explore the campus’s sustainability efforts with guided tours.",
    image: sustainabilityImage,
    registrationLink: "#",
  },
  {
    id: 2,
    title: "SDG Conversation Series",
    date: "2025-02-20",
    description:
      "Join the conversation about Sustainable Development Goals and their global impact.",
    image: sdgConversationImage,
    registrationLink: "#",
  },
  {
    id: 3,
    title: "Bird Walks",
    date: "2025-03-12",
    description:
      "Discover the diverse bird species on our campus during a guided walk.",
    image: birdWalkImage,
    registrationLink: "#",
  },
  {
    id: 4,
    title: "Wetland Documentation",
    date: "2025-04-05",
    description:
      "Learn about our local wetlands and contribute to documenting their health.",
    image: wetlandImage,
    registrationLink: "#",
  },
  {
    id: 5,
    title: "Community Outreach Activities (KARE)",
    date: "2025-05-10",
    description:
      "Participate in community outreach programs aimed at environmental awareness.",
    image: kareImage,
    registrationLink: "#",
  },
];

const UpcomingEventsCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handlePrevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const getEventsForDate = (date) => {
    return events.filter((event) => isSameDay(new Date(event.date), date));
  };

  const renderCalendarDays = () => {
    const startDate = startOfMonth(currentMonth);
    const endDate = endOfMonth(currentMonth);
    const days = [];
    const startDay = startDate.getDay();

    for (let i = 0; i < startDay; i++) {
      days.push(
        <div
          key={`empty-${i}`}
          className="h-24 sm:h-32 border border-gray-200 bg-gray-100 rounded-md"
        ></div>
      );
    }

    for (let day = 1; day <= endDate.getDate(); day++) {
      const currentDate = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        day
      );
      const dayEvents = getEventsForDate(currentDate);

      days.push(
        <div
          key={day}
          className={`h-24 sm:h-32 border border-gray-300 p-2 flex flex-col items-center justify-between cursor-pointer rounded-md ${
            dayEvents.length > 0 ? "bg-green-200 hover:bg-green-300" : "bg-white"
          }`}
          onClick={() => handleDateClick(currentDate)}
        >
          <span className="text-sm sm:text-lg font-medium text-black">{day}</span>
          {dayEvents.map((event, index) => (
            <span
              key={index}
              className="text-xs sm:text-sm text-green-700 font-semibold"
            >
              {event.title}
            </span>
          ))}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="flex flex-wrap justify-center items-start p-4 gap-4 bg-gray-50 mt-12">
      {/* Calendar Section */}
      <div className="bg-white shadow-lg p-4 rounded-lg w-full sm:w-full md:w-2/3 border border-gray-300">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={handlePrevMonth}
            className="text-sm sm:text-base font-bold text-green-600 hover:text-green-800 transition duration-300"
          >
            &larr; Prev
          </button>
          <h2 className="text-lg sm:text-xl font-semibold text-green-800">
            {format(currentMonth, "MMMM yyyy")}
          </h2>
          <button
            onClick={handleNextMonth}
            className="text-sm sm:text-base font-bold text-green-600 hover:text-green-800 transition duration-300"
          >
            Next &rarr;
          </button>
        </div>
        <div className="grid grid-cols-7 gap-1 sm:gap-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div
              key={day}
              className="border-b border-r border-gray-200 p-1 sm:p-2 text-center font-semibold bg-green-100 text-green-900 rounded-md text-xs sm:text-sm"
            >
              {day}
            </div>
          ))}
          {renderCalendarDays()}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEventsCalendar;
