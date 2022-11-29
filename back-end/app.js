import express from "express";
import morgan from "morgan";
import cors from "cors";

import daysRouter from "./routes/days.js";

const app = express();

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());
app.use(cors());

app.use("/api/days", daysRouter);

export default app;