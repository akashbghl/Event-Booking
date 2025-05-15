import express from 'express'
import Booking from '../models/bookings.js';

const router = express.Router();

// creating bookings Route

router.post('/',async (req,res)=>{
    const {name , email , seats , eventID} = req.body;
    
    try {
        const booking = await Booking.create({
            eventID,
            name,
            email,
            seats,
        });
        res.status(201).json({message: 'You have Booked Your tickets'});
    } catch (error) {
        console.error(error.message);
        res.status(500).json({message: 'server error'});
    }
});

// fetching all bookings from database

router.get('/', async (req,res)=>{
    try {
        const bookings  = await Booking.find();
        res.status(200).json({bookings});
    } catch (error) {
        console.error(error.message);
        res.status(501).json({message:'Internal server error'});
    }
})

export default router