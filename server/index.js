import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import bookingRoute from './routes/bookingRoute.js'

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());


app.use('/bookings',bookingRoute);

connectDB();

const PORT = process.env.PORT || 8000; 
app.listen(PORT,()=>{console.log(`Server is running on http://localhost:${PORT}`)});