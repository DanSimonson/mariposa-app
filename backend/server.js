import express from "express";
import projectRouter from "./routers/projectRouter.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import path from "path";

dotenv.config();
connectDB();
const app = express();

//middleware stuff
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/projects", projectRouter);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/frontend/build")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/frontend/build/index.html"))
);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
