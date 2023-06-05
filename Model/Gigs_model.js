const mongoose = require("mongoose")
const { Schema } = require("mongoose")

const GigShema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    short_title: {
      type: String,
      required: true,
    },
    short_desc: {
      type: String,
      required: true,
    },
    image: {
      type: [String],
      required: false,
    },
    cover: {
      type: String,
      required: true,
    },
    cat: {
      type: String,
      required: true,
    },
    delivery: {
      type: Number,
      default: 0,
    },
    revision: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    total_stars: {
      type: Number,
      default: 0,
    },
    NumberOf_stars: {
      type: Number,
      default: 0,
    },
    Features: {
      type: [String],
      required: false,
    },
    sales: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model("Gig", GigShema)