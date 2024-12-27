import React from 'react';
import UpcomingEventsCalendar from '../components/events/UpcomingEventsCalendar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSlider from '../components/HeroSlider';
import PastEventsArchive from '../components/events/PastEventsArchive';

const EducationAndEvents = () => {
    return (
      <div className="education-events">
        <Header />
        <HeroSlider />
        <UpcomingEventsCalendar />
        <PastEventsArchive />
        <Footer />
      </div>
    );
  };
export default EducationAndEvents;