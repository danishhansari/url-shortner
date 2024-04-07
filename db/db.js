import mongoose from "mongoose";

export async function connectDB(url) {
  return await mongoose.connect(url);
}
