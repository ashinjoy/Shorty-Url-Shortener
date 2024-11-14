import { model, Schema } from "mongoose";
const userSchema = new Schema(
  {
    uname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const userModel = model("user", userSchema);
