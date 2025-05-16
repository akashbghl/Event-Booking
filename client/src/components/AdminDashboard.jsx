import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch bookings when component mounts
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get("https://event-booking-backend-h2xx.onrender.com/bookings");
        setBookings(res.data.bookings);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching bookings:", error.message);
        alert("Error fetching bookings. Please try again later.");
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  // Delete booking (if API supports DELETE)
  const handleDelete = async (bookingId) => {
    if (!window.confirm("Are you sure you want to delete this booking?")) return;

    try {
      await axios.delete(`https://event-booking-backend-h2xx.onrender.com/bookings/${bookingId}`);
      setBookings((prev) => prev.filter((b) => b._id !== bookingId));
      alert("Booking deleted successfully!");
    } catch (error) {
      console.error("Error deleting booking:", error.message);
      alert("Failed to delete booking. Please try again.");
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
        Admin Dashboard
      </h1>
      {loading ? (
        <p className="text-center text-gray-600 dark:text-gray-300">Loading bookings...</p>
      ) : bookings.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-300">No bookings found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl shadow-md">
            <thead>
              <tr className="bg-blue-100 dark:bg-gray-700 text-left text-sm text-gray-700 dark:text-gray-200">
                <th className="px-4 py-3">Event-id</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Seats</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-200 dark:border-gray-700 text-sm text-gray-800 dark:text-gray-100"
                >
                  <td className="px-4 py-3">{booking.eventID}</td>
                  <td className="px-4 py-3">{booking.name}</td>
                  <td className="px-4 py-3">{booking.email}</td>
                  <td className="px-4 py-3">{booking.seats}</td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => handleDelete(booking._id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
