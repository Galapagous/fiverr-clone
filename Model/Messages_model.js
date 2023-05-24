import mongoose from "mongoose"
import { Schema } from "mongoose"

const MessageSchema = new Schema(
  {
    conversation_id: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

export default mongoose.model("MessageSchema", MessageSchema)
