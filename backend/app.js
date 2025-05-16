import connectDB from "./config/db.js";
import express from "express";
import { config } from "dotenv";
import authRoute from "./routes/authRoute.js";
config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoute);

connectDB().then(() => {
  console.log("MongoDB connected ✅");
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
});
