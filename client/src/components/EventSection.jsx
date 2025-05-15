import React from "react";
import { useState } from "react";
import BookingForm from "./BookingForm";

const events = [
    {
        eventID:'1001',
        title: "Music Fest 2025",
        image: "https://picsum.photos/id/1011/400/250", // music-like image
        date: "June 21, 2025",
        description: "Enjoy a night of great music with live bands and artists.",
    },
    {
        eventID: '1002',
        title: "Tech Conference",
        image: "https://picsum.photos/id/1005/400/250", // tech vibe
        date: "July 10, 2025",
        description: "Explore the latest in tech and innovation.",
    },
    {
        eventID: '1003',
        title: "Food Carnival",
        image: "https://picsum.photos/id/292/400/250", // food/drinks
        date: "August 5, 2025",
        description: "Taste mouth-watering dishes from around the world.",
    },
    {
        eventID: '1004',
        title: "Art & Culture Expo",
        image: "https://picsum.photos/id/1035/400/250", // artistic vibe
        date: "September 15, 2025",
        description: "Experience diverse cultures through stunning artworks.",
    },
];

const EventSection = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);

    return (
        <section className="bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 py-12">
            <div className="max-w-7xl mx-auto px-4 text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                    Book Your Favorite Events
                </h1>
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                    Discover and reserve spots for exciting upcoming events near you!
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 max-w-7xl mx-auto">
                {events.map((event, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden transition transform hover:-translate-y-1 hover:shadow-2xl"
                    >
                        <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-5">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                                {event.title}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                                📅 {event.date}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                {event.description}
                            </p>
                            <button
                                onClick={() => setSelectedEvent(event)}
                                className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition"
                            >
                                Book Now
                            </button>

                        </div>
                    </div>
                ))}
            </div>
            <BookingForm
                isOpen={!!selectedEvent}
                eventTitle={selectedEvent?.title}
                onClose={() => setSelectedEvent(null)}
                eventID={selectedEvent?.eventID}
            />

        </section>

    );
};

export default EventSection;
