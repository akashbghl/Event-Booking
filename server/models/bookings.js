import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
    {
        eventID:{
            type: String,
            require: true,
        },
        name:{
            type: String,
            require: true,
        },
        email:{
            type: String,
            require: true,
            unique: true,
        },
        seats:{
            type: Number,
            require: true,
        }
    },
    {
        timestamps: true,
    }

)
const Booking = mongoose.model('booking',bookingSchema);
export default Booking;