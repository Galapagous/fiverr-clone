const mongoose = require("mongoose")
const { Schema } = require("mongoose")

const OrderSchema = new Schema(
  {
    Gig_id: {
      type: String,
      required: true,
    },
    Title: {
      type: String,
      required: true,
    },
    Price: {
      type: Number,
      default: 0,
    },
    Gig_image: {
      type: String,
      required: false,
    },
    Buyer_id: {
      type: String,
      required: true,
    },
    Seller_id: {
      type: String,
      required: true,
    },
    Is_completed: {
      type: Boolean,
      default: false,
    },
    Payment_intent: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)
