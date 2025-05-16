// db.js
import { connect } from "mongoose";
import { config } from "dotenv";
config();

const connectDB = async () => {
  try {
    await connect(process.env.MONGO_URI);
  } catch (error) {
    console.error("MongoDB connection failed ❌:", error.message);
    process.exit(1); // Exit on failure
  }
};

export default connectDB;
