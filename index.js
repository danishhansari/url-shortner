import express, { json } from "express";
import { connectDB } from "./db/db.js";
import userRoute from "./routes/user.route.js";

const PORT = process.env.PORT || 8000;

connectDB(process.env.MONGO_URL)
  .then(() => {
    console.log("connected to the db successfully");
  })
  .catch((err) => {
    console.log("Error while connecting", err);
  });

const app = express();
app.use(json());

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

app.get("/", (req, res) => res.json({ message: "Hi there" }));

app.use("/api", userRoute);
