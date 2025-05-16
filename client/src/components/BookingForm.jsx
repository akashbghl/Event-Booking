import axios from "axios";
import React, { useState , useEffect } from "react";


const BookingForm = ({ isOpen, onClose, eventTitle, eventID }) => {

    const [isSubmitting,setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        eventID: "",
        name: "",
        email: "",
        seats: 1,
    });

    useEffect(() => {
        if (isOpen && eventID) {
            setFormData((prev) => ({ ...prev, eventID }));
        }
    }, [isOpen, eventID]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const res = await axios.post('https://event-booking-backend-h2xx.onrender.com/bookings', formData);
            console.log("Booking submitted for:", eventTitle, formData);
            alert("Booking successful!");
            // Clear form and close modal
            setFormData({ eventID:"", name: "", email: "", seats: 1 });
            onClose();

        } catch (error) {
            console.error(error.message);
            alert('Booking failed !');
        }
        finally{
            setIsSubmitting(false);   
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur flex items-center justify-center">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 w-full max-w-md">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                    Book: {eventTitle}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 dark:text-gray-300 mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 dark:text-gray-300 mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 dark:text-gray-300 mb-1">Number of Seats</label>
                        <input
                            type="number"
                            name="seats"
                            min="1"
                            required
                            value={formData.seats}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                        />
                    </div>
                    <div className="flex justify-end space-x-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className={`px-4 py-2 text-white rounded-lg ${isSubmitting? 'bg-blue-900 cursor-not-allowed':' bg-blue-600 cursor-pointer hover:bg-blue-700'}`}
                        >
                            {isSubmitting? 'submitting ...' : 'Confirm Booking'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookingForm;
