const mongoose = require("mongoose")
const { Schema } = require("mongoose")

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: false,
    },
    profile: {
      type: String,
      required: false,
    },
    desc: {
      type: String,
      required: false,
    },
    is_seller: {
      type: Boolean,
      default: false,
    },
    country: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
)
module.exports = mongoose.model("User", UserSchema)
