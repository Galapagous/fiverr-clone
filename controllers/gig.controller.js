const Gigs_model = require("../Model/Gigs_model")
const { all } = require("../Route/user.route")

const getGig = async (req,res,next)=>{
  try{
    const gig =await Gigs_model.findById(req.params.id)
    if (!gig){
      return next(res.status(401).json("gig not found"))
    }
    res.status(200).json(gig)
  }catch(error){
    console.log(error)
  }
}
const createGig = async (req, res, next)=>{
  if (!req.is_seller) return next(res.status(400).json("Only sellers can create a gig"))
  const theGig = new Gigs_model({
    userId: req.userId,
    ...req.body
  })
  try {
    const savedGig = await theGig.save()
    res.status(200).json(savedGig)
  } catch (error) {
    console.log(error)
  }
}
const allGig = async (req, res, next)=>{
  const q = req.query
  const filters = {
    ...(q.userId && {cat: q.userId}),
    ...(q.cat && {cat: q.cat}),
    ...((q.min || q.max) && {price: {...(q.min && {$gt: q.min}), ...(q.max && {$lt: q.max})}}),
    ...(q.search && {title: { $regex: q.search, $options: "i" }})
  }
  try{
    const allGig = await Gigs_model.find(filters)
    if (!allGig)return next(res.status(401).json("No gigs yet"))
    res.status(200).json(allGig)
  }catch(error){
    console.log(error)
  }
}
const deleteGig = async (req, res, next)=>{
  const gig = Gigs_model.findById(req.params.id)
  if (!gig.userId === req.userId)return(next(res.status(404).json("You can only delete your gig")))
  try {
    await Gigs_model.findByIdAndDelete(req.params.id)
    res.status(200).json("Gig deleted successfully")
  } catch (error) {
    console.log(error)
  }
} 

module.exports = {getGig, createGig, allGig, deleteGig}