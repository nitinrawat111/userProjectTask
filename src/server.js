import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { connectDB } from './db/db.js';
import { ApiResponse } from './utils/ApiResponse.js';
import { ApiError } from './utils/ApiError.js';
import mongoose from 'mongoose';
import apiRouter from './routes/api/api.router.js'

////////////////////////////////////////////////////////////
// Config
////////////////////////////////////////////////////////////
dotenv.config(); 

////////////////////////////////////////////////////////////
// Express App Initialization
////////////////////////////////////////////////////////////
const app = express();

////////////////////////////////////////////////////////////
// Middlewares
////////////////////////////////////////////////////////////
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true   // To allow cookies
}));
app.use(express.json());

////////////////////////////////////////////////////////////
// Routes
////////////////////////////////////////////////////////////
app.use('/api/', apiRouter);

////////////////////////////////////////////////////////////
// Error Handler
////////////////////////////////////////////////////////////
app.use((err, req, res, next) => {
    if(req.headersSent) {
        next(err);
    }

    if (err instanceof ApiError) {
        return ApiResponse(res, err.statusCode, err.message, undefined, err.errors);
    } else if (err instanceof mongoose.Error.ValidationError) {
        // Constructing Errors Object from Mongoose Validation Error
        const errors = {}
        for (const key of Object.keys(err.errors))
            errors[key] = err.errors[key].message;
        return ApiResponse(res, 400, err.message, undefined, errors);
    } else {
        // In case of any other error
        return ApiResponse(res, 500, "Internal Server Error!");
    }
});

////////////////////////////////////////////////////////////
// Server Initialization
////////////////////////////////////////////////////////////
const PORT = process.env.PORT || 3000;
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server started on PORT: ${PORT}`);
    });
});