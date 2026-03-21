import express, { Express } from "express";
import dotenv from "dotenv";

// Load environment variables BEFORE your internal imports!
dotenv.config();

import morgan from "morgan";
import eventRoutes from "./api/v1/routes/eventRoutes";
import helmet from "helmet";

// Initialize Express application
const app: Express = express();

// Apply basic Helmet security
app.use(helmet());

app.use(express.json());
app.use(morgan("combined"));

// Define a route
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.use("/api/v1", eventRoutes);

export default app;