// const Jwt = require("jsonwebtoken")
const User_model = require("../Model/User_model")

const deleteUser =async (req, res, next) => {
  const User = await User_model.findById(req.params.id)
    if (!(req.userId === User._id.toString())){
      next(res.status(401).json("You can only delete your account"))
    }
      await User_model.findByIdAndDelete(req.params.id)
      res.status(200).json("Deleted")
  }

const allUser = async(req,res)=>{
  console.log("recieved")
  const User = await User_model.find()
  if (!User) return res.status(401).json("User Not Found")
  return res.status(200).json(User)
}
module.exports = {deleteUser, allUser}
