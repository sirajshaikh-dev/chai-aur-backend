import mongoose from "mongoose";

const userSchema = new mongoose.schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      lowercase: true,
    },
  },
  { timestamps: true }
);

export const User= mongoose.model('User',userSchema) //User will stored as users in db