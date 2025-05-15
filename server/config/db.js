import mongoose from "mongoose";

const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ MongoDB connected successfully");
    } catch (error) {
        console.error(error.message);
        console.log('❌ MongoDB connection failed')
        process.exit(1);
    }

}

export default connectDB