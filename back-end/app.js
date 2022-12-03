import express from "express";
import morgan from "morgan";
import cors from "cors";

import daysRouter from "./routes/days.js";
import profilesRouter from "./routes/profiles.js";

const app = express();

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());
app.use(cors());

app.use("/api/days", daysRouter);
app.use("/api/profiles", profilesRouter);

export default app;