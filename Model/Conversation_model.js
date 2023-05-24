import mongoose from "mongoose"
import { Schema } from "mongoose"

const ConversationShema = new Schema(
  {
    conversation_id: {
      type: String,
      required: true,
    },
    seller_id: {
      type: String,
      required: true,
    },
    buyer_id: {
      type: String,
      required: true,
    },
    readBy_buyer: {
      type: Boolean,
      default: false,
    },
    readBy_seller: {
      type: Boolean,
      default: false,
    },
    last_message: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
)

export default mongoose.model("COnversationSchema", ConversationShema)
