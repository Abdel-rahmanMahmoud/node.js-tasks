
import express from "express";
import route from "./routes/studentsRoutes.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { httpStatusText } from "./utils/httpStatusText.js";

dotenv.config();

// console.log(process.env.MY_NAME); // يطبع Abd
const url = process.env.MONGO_URL;
mongoose
  .connect(url)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/students", route);

// handle not found routes
app.all("/api", (req, res) => {
  res.status(404).json({
    status: httpStatusText.Fail,
    message: "Resource not found ^_^",
  });
});
// handle server error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(error.statusCode || 500).json({
    status: err.httpStatusText || httpStatusText.Error,
    message: err.message,
    code: err.code || 500,
  });
});
const PORT = process.env.PORT || 8000;
app.listen(PORT || 8000, () => {
  console.log(`Server running on port ${PORT}`);
});
