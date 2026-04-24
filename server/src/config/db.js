import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // const conn = await mongoose.connect(process.env.MONGODB_URI);
    const conn = await mongoose.connect("mongodb+srv://rajendrala411_db_user:oIKHW2U3ZX64dzas@cluster0.ogptup3.mongodb.net/");

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB connection failed: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;

