const mongoose = require("mongoose")
const { Schema } = require("mongoose")

const ReviewSchema = new Schema(
  {
    GigId: {
      type: String,
      required: true,
    },
    UserId: {
      type: String,
      required: true,
    },
    Desc: {
      type: String,
      required: true,
    },
    Star: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Review", ReviewSchema)
