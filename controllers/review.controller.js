const Gigs_model = require('../Model/Gigs_model')
const Review = require('../Model/Review_model')
const User_model = require('../Model/User_model')


const singleReview =async (req,res)=>{
    try {
        const review = await Review.findById(req.params.id)
        if(!review)res.status(404).json('review not found')
        res.status(200).json(review)
    } catch (error) {
        res.status(500).json(error)
    }

}

const allReview = async (req,res)=>{
    try {
        const reviews = await Review.find()
        console.log({rev: reviews})
        res.status(200).json(reviews)
    } catch (error) {
        res.status(404).json(error)
    }
}

const createReview = async(req,res)=>{
    const oldReview =await Review.findOne({UserId: req.userId, GigId: req.body.GigId})
    if (oldReview) return (res.status(403).json('You"ve already created a review'))
    try {
        if(req.isSeller)res.status(403).json('sellers cannot create a review')
        const review = new Review({
            UserId: req.userId,
            GigId: req.body.GigId,
            Desc: req.body.Desc,
            Star: req.body.Star
        })
        const savedReview =await review.save()
        res.status(200).json(savedReview)
        await Gigs_model.findOneAndUpdate(req.body.gigId,{
            $inc: {total_stars: req.body.total_stars, NumberOf_stars: 1},
        })
    } catch (error) {
        return (res.status(500).json(error))
    }
}

const deleteReview = async(req,res,next)=>{
    const review = await Review.findById(req.params.id)
    if (!(req.userId === review.UserId.toString())){
      next(res.status(401).json("You can only delete your account"))
    }
      await Review.findByIdAndDelete(req.params.id)
      res.status(200).json("Deleted")
    res.send('delete review')
}


module.exports = {singleReview, createReview, deleteReview, allReview}