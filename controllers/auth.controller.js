const bcrypt = require("bcrypt")
const User = require("../Model/User_model")
const jwt = require("jsonwebtoken")

// ---------------Login Logic-------------------
const login = async (req, res, next) => {
  console.log("hello")
  // console.log(req)
  try {
    const user = await User.findOne({ username: req.body.username })
    if (!user) {
      return next(res.status(404).json("User Not Found"))
    }
    const user_password = bcrypt.compareSync(req.body.password, user.password)
    if (!user_password) {
      return next(res.status(404).json("Invalid Password"))
    }
    const { password, ...other } = user._doc
    var token = jwt.sign({ id: user._id.toString(), isSeller: user.is_seller }, process.env.JWT_KEY)
    res.cookie("accesstoken", token, { httpOnly: true }).status(201).json(other)
  } catch (error) {
    next((error))
  }
}
// ---------------Logout Logic-------------------
const logout = (req, res) => {
  res.clearCookie("accesstoken", {
    sameSite: "none",
    security: true
  }).status(200).send("User has been logged out")
}
// ---------------Register Logic-------------------
const register = async (req, res, next) => {
  try {
    const hash_password = bcrypt.hashSync(req.body.password, 10)
    const newUser = new User({
      ...req.body,
      password: hash_password,
    })
    await newUser.save()
    res.status(201).json(newUser)
  } catch (error) {
    next(error)
  }
}

module.exports = { login, logout, register }
