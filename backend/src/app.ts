import express from "express";
import cors from "cors";
import eventRoutes from "./routes/eventRoutes";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", eventRoutes);

export default app;
