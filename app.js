const express = require("express")
const mongoose = require("mongoose")
const app = express()
const UserRoute = require("./Route/user.route")
const AuthRoute = require("./Route/auth.route")
const ConversationRoute = require("./Route/conversation.route")
const GigRoute = require("./Route/gig.route")
const MessageRoute = require("./Route/message.route")
const OrderRoute = require("./Route/order.route")
const ReviewRoute = require("./Route/review.route")
var cookieParser = require("cookie-parser")
const cors = require("cors")
require("dotenv").config()
mongoose.set("strictQuery", true)
app.use(express.json())
app.use(cookieParser())
app.use(cors({origin: "http://localhost:3000", credentials: true}))
// app.use(cors())

// ---------------------Establishing connection to database----------------------------
const connection = async()=>{
  try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log("Connected to database")
  } 
  catch (err) {
    console.log(err)
  }
}  

// ---------------------Setting up my routes----------------------------
app.use("/api/user", UserRoute)
app.use("/api/auth", AuthRoute)
app.use("/api/gig", GigRoute)
// app.use("/api/conversation", ConversationRoute)

app.use((err,req,res,next)=>{
  const ErrorStatus = err.status || 500
  const ErrorMessage = err.message || "Something went wrong"

  return res.status(ErrorStatus).send(ErrorMessage)
})

// ---------------------Listening on Port----------------------------
app.listen(4000, () => {
  connection()
  console.log("Server Running")
})
