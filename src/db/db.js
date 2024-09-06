import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log('Connected to MongoDB succesfully!');
        console.log(`MongoDB Host: ${connectionInstance.connection.host}`);
        console.log(`DB Name: ${connectionInstance.connection.name}`);
        mongoose.connection.on('error', (err) => {
            console.log(`Error in MongoDB Connection: ${err}`);
            process.exit(1);
        })
    } catch (err) {
        console.log(`Cannot connect to MongoDB Database: ${err}`);
        process.exit(1);
    }
};