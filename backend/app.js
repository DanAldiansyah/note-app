import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import errorHandler from "./middlewares/errorHandler.js";
import logger from "./middlewares/logger.js";

import taskRoutes from "./routes/taskRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);


app.use("/api", taskRoutes);


app.use(errorHandler)

try {
    await mongoose.connect(process.env.MONGO_URI)
    app.listen(process.env.PORT, () => {
        console.log(`SERVER is listening on http://localhost:${process.env.PORT}`);  
    })
} catch (error) {
    console.log(error)
}