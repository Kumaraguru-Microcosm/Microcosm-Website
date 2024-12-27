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

    // Add empty cells before the first day of the month
    for (let i = 0; i < startDay; i++) {
      days.push(
        <div
          key={`empty-${i}`}
          className="h-32 border border-gray-200 bg-gray-100 rounded-md"
        ></div>
      );
    }

    // Add days of the month
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
          className={`h-32 border border-gray-300 p-2 flex flex-col items-center justify-between cursor-pointer rounded-md ${dayEvents.length > 0 ? "bg-green-200 hover:bg-green-300" : "bg-white"
            }`}
          onClick={() => handleDateClick(currentDate)}
        >
          <span className="text-lg font-medium text-black">{day}</span>
          {dayEvents.map((event, index) => (
            <span
              key={index}
              className="text-xs text-green-700 font-semibold"
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
    <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-center items-start p-6 gap-6 bg-gray-50 mt-12">
      {/* Calendar Section */}
      <div className="bg-white shadow-lg p-6 rounded-lg w-full sm:w-full md:w-2/3 lg:w-2/3 border border-gray-300">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={handlePrevMonth}
            className="text-lg font-bold text-green-600 hover:text-green-800 transition duration-300"
          >
            &larr; Prev
          </button>
          <h2 className="text-2xl font-semibold text-green-800">
            {format(currentMonth, "MMMM yyyy")}
          </h2>
          <button
            onClick={handleNextMonth}
            className="text-lg font-bold text-green-600 hover:text-green-800 transition duration-300"
          >
            Next &rarr;
          </button>
        </div>
        <div className="grid grid-cols-7 gap-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div
              key={day}
              className="border-b border-r border-gray-200 p-2 text-center font-semibold bg-green-100 text-green-900 rounded-md"
            >
              {day}
            </div>
          ))}
          {renderCalendarDays()}
        </div>
      </div>

      {/* Event Details Section */}
      <div className="bg-white shadow-lg p-6 rounded-lg w-full sm:w-full md:w-1/3 lg:w-1/3 border border-gray-300 flex justify-center items-center mt-6 md:mt-0">
        {selectedDate ? (
          getEventsForDate(selectedDate).length > 0 ? (
            getEventsForDate(selectedDate).map((event) => (
              <div
                key={event.id}
                className="w-full text-center bg-green-50 p-6 rounded-lg shadow-md border border-green-200"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="mb-4 mx-auto rounded-lg shadow-sm w-full h-48 object-cover"
                />
                <h4 className="text-xl font-bold text-green-800">{event.title}</h4>
                <p className="text-sm text-gray-700 my-4">{event.description}</p>
                <a
                  href={event.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-lg hover:bg-green-700 transition duration-300 inline-block"
                >
                  Know More / Register
                </a>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-600 text-center">
              No events scheduled for this date.
            </p>
          )
        ) : (
          <p className="text-sm text-gray-600 text-center">
            Click a date to view events.
          </p>
        )}
      </div>
    </div>
  );
};

export default UpcomingEventsCalendar;
