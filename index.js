import express from "express";
import { connectDB } from "./db/db.js";

const PORT = process.env.PORT || 8000;

connectDB(process.env.MONGO_URL)
  .then(() => {
    console.log("connected to the db successfully");
  })
  .catch((err) => {
    console.log("Error while connecting", err);
  });

const app = express();

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
