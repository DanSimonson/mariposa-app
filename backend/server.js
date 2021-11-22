import express from "express";
import projectRouter from "./routers/projectRouter.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
connectDB();
const app = express();

//middleware stuff
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/projects", projectRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
