import express from "express";
import { connectDB } from "./services/db.js";
import { config } from "dotenv";
import jobRoutes from './routes/job.routes.js'
import cors from 'cors'

const app = express();
config();

app.use(cors()) // Enable CORS for all requests

app.use(express.json());
app.use('/api/jobs', jobRoutes)

app.listen(process.env.PORT, () => {
  connectDB();
  console.log(`Server is running on port ${process.env.PORT}`);
});
