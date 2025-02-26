import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from a .env file
dotenv.config();

export const connectDB = async () => {
  try {
    mongoose.connect("mongodb+srv://mnidal414:12345@cluster0.djqpo.mongodb.net/chat?retryWrites=true&w=majority&appName=Cluster0", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
      .then(() => console.log("MongoDB connection successful"))
      .catch(err => console.error("MongoDB connection error:", err));
    
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    console.error(error.stack); // Log full stack trace for debugging
    process.exit(1); // Exit process if DB connection fails
  }
};
