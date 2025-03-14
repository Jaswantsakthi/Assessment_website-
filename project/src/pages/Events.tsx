import React, { useState } from 'react';
import { Calendar, Clock, MapPin, X, Plus } from 'lucide-react';

function Events() {
  const [selectedEvent, setSelectedEvent] = useState<null | typeof events[0]>(null);
  const [showCreateEvent, setShowCreateEvent] = useState(false);
  const [events, setEvents] = useState([
    {
      title: "Easter Sunday Celebration",
      date: "March 31, 2024",
      time: "10:00 AM - 12:00 PM",
      location: "Main Sanctuary",
      description: "Join us for a special Easter service celebrating the resurrection of Jesus Christ with worship, message, and fellowship.",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80"
    },
    {
      title: "Youth Conference 2024",
      date: "April 15-17, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Fellowship Hall",
      description: "Three nights of worship, teaching, and community for young people ages 13-25. Special guest speakers and worship leaders.",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80"
    },
    {
      title: "Community Outreach Day",
      date: "April 20, 2024",
      time: "9:00 AM - 2:00 PM",
      location: "City Park",
      description: "Serving our community through various projects including food distribution, cleanup, and free health screenings.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80"
    }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    numberOfAttendees: '1'
  });

  const [newEventData, setNewEventData] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    description: '',
    image: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { event: selectedEvent?.title, ...formData });
    alert('Registration successful! We will contact you with more details.');
    setSelectedEvent(null);
    setFormData({ name: '', email: '', phone: '', numberOfAttendees: '1' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNewEventChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewEventData(prev => ({ ...prev, [name]: value }));
  };

  const handleCreateEvent = (e: React.FormEvent) => {
    e.preventDefault();
    setEvents(prev => [...prev, newEventData]);
    setNewEventData({
      title: '',
      date: '',
      time: '',
      location: '',
      description: '',
      image: ''
    });
    setShowCreateEvent(false);
    alert('Event created successfully!');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="h-[40vh] relative bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/60">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Upcoming Events</h1>
            <p className="text-xl text-white max-w-2xl">
              Join us for these special gatherings and be part of our community.
            </p>
          </div>
        </div>
      </div>

      {/* Create Event Button */}
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => setShowCreateEvent(true)}
          className="flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Create New Event
        </button>
      </div>

      {/* Events List */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid gap-12">
              {events.map((event, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-8">
                      <h3 className="text-2xl font-semibold mb-4">{event.title}</h3>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 text-gray-600">
                          <Calendar className="w-5 h-5" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-600">
                          <Clock className="w-5 h-5" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-600">
                          <MapPin className="w-5 h-5" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6">{event.description}</p>
                      <button 
                        onClick={() => setSelectedEvent(event)}
                        className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
                      >
                        Register Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Create Event Modal */}
      {showCreateEvent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative">
            <button 
              onClick={() => setShowCreateEvent(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
            
            <h3 className="text-2xl font-semibold mb-6">Create New Event</h3>
            
            <form onSubmit={handleCreateEvent} className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Event Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={newEventData.title}
                  onChange={handleNewEventChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                  Date
                </label>
                <input
                  type="text"
                  id="date"
                  name="date"
                  value={newEventData.date}
                  onChange={handleNewEventChange}
                  required
                  placeholder="e.g., March 31, 2024"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                  Time
                </label>
                <input
                  type="text"
                  id="time"
                  name="time"
                  value={newEventData.time}
                  onChange={handleNewEventChange}
                  required
                  placeholder="e.g., 10:00 AM - 12:00 PM"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={newEventData.location}
                  onChange={handleNewEventChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={newEventData.description}
                  onChange={handleNewEventChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                  Image URL
                </label>
                <input
                  type="url"
                  id="image"
                  name="image"
                  value={newEventData.image}
                  onChange={handleNewEventChange}
                  required
                  placeholder="https://example.com/image.jpg"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 transition-colors mt-6"
              >
                Create Event
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Registration Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
            <button 
              onClick={() => setSelectedEvent(null)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
            
            <h3 className="text-2xl font-semibold mb-4">Register for {selectedEvent.title}</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="numberOfAttendees" className="block text-sm font-medium text-gray-700 mb-1">
                  Number of Attendees
                </label>
                <input
                  type="number"
                  id="numberOfAttendees"
                  name="numberOfAttendees"
                  value={formData.numberOfAttendees}
                  onChange={handleInputChange}
                  required
                  min="1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors mt-6"
              >
                Complete Registration
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} The Communion Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Events;