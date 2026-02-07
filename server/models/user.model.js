

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true, // keep if you want usernames unique
    },
    email: {
      type: String,
      required: true, // 👈 must be provided
      unique: true,   // 👈 ensures no duplicate emails
    },
    password: {
      type: String,
      required: true, // 👈 must be provided
      // ❌ remove unique, passwords should not be unique
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
