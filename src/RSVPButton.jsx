import React from 'react';
import { Calendar } from 'lucide-react';

const RSVPButton = () => {
  const handleRSVP = () => {
    // Event details
    const event = {
      title: 'Special Event',
      description: 'Join us for our special event! RSVP confirmed.',
      location: 'Event Venue',
      // Setting time to 2 PM - 5 PM on Feb 9th, 2025
      startTime: '20250217T140000',
      endTime: '20250218T170000'
    };

    // Create Google Calendar URL
    const calendarUrl = new URL('https://calendar.google.com/calendar/render');
    calendarUrl.searchParams.append('action', 'TEMPLATE');
    calendarUrl.searchParams.append('text', event.title);
    calendarUrl.searchParams.append('details', event.description);
    calendarUrl.searchParams.append('location', event.location);
    calendarUrl.searchParams.append('dates', `${event.startTime}/${event.endTime}`);

    // Open Google Calendar in new tab
    window.open(calendarUrl.toString(), '_blank');
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-50">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Special Event</h2>
        <p className="text-gray-600">February 9th, 2025</p>
        <p className="text-gray-600">2:00 PM - 5:00 PM</p>
      </div>
      
      <button
        onClick={handleRSVP}
        className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-md"
      >
        <Calendar className="w-5 h-5" />
        RSVP Now
      </button>
    </div>
  );
};

export default RSVPButton;