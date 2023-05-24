import mongoose, { Schema } from "mongoose"
import { Schema } from "mongoose"

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

export default mongoose.model("Review", ReviewSchema)
