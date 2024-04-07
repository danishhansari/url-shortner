import mongoose, { Schema } from "mongoose";

const userSchema = Schema(
  {
    originalURL: {
      type: String,
      require: true,
    },
    shortId: {
      type: String,
      unique: true,
    },
    // analytics: [{ type: Number }],
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);
export { User };
